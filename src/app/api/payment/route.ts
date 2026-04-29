import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { subscriptions } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 503 });
  }
  const stripe = new Stripe(stripeKey, {
    apiVersion: "2026-04-22.dahlia",
  });
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { priceId, tier } = body;

    if (!priceId || !tier) {
      return NextResponse.json({ error: "Missing priceId or tier" }, { status: 400 });
    }

    // Create Stripe Checkout Session
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        userId: session.user.id,
        tier: tier,
      },
      success_url: `${process.env.NEXTAUTH_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/pricing?canceled=true`,
      allow_promotion_codes: true,
    });

    // Create pending subscription record
    await db.insert(subscriptions).values({
      userId: session.user.id,
      stripeSubscriptionId: checkoutSession.id,
      stripePriceId: priceId,
      tier: tier,
      status: "pending",
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Payment error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user's subscription
    const userSubscription = await db.query.subscriptions.findFirst({
      where: eq(subscriptions.userId, session.user.id),
    });

    return NextResponse.json({
      subscription: userSubscription || null,
    });
  } catch (error) {
    console.error("Payment GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscription" },
      { status: 500 }
    );
  }
}
