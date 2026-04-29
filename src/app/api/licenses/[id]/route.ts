import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { licenses } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    // Fetch license by ID
    const license = await db.query.licenses.findFirst({
      where: eq(licenses.id, id),
    });

    if (!license) {
      return NextResponse.json({ error: "License not found" }, { status: 404 });
    }

    return NextResponse.json(license);
  } catch (error) {
    console.error("License detail API error:", error);
    return NextResponse.json({ error: "Failed to fetch license" }, { status: 500 });
  }
}
