import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { licenses } from "@/lib/schema";
import { eq, like, or, and, desc } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    // Check authentication
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get query parameters for filtering
    const { searchParams } = new URL(request.url);
    const state = searchParams.get("state");
    const profession = searchParams.get("profession");
    const status = searchParams.get("status");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");

    // Build query conditions
    const conditions = [];
    
    if (state) {
      conditions.push(eq(licenses.state, state));
    }
    
    if (profession) {
      conditions.push(like(licenses.profession, `%${profession}%`));
    }
    
    if (status) {
      conditions.push(eq(licenses.status, status));
    }
    
    if (search) {
      conditions.push(
        or(
          like(licenses.firstName, `%${search}%`),
          like(licenses.lastName, `%${search}%`),
          like(licenses.licenseNumber, `%${search}%`),
          like(licenses.businessName, `%${search}%`)
        )
      );
    }

    // Query database with pagination
    const offset = (page - 1) * limit;
    
    const licenseData = conditions.length > 0
      ? await db.select().from(licenses).where(and(...conditions)).orderBy(desc(licenses.renewalDate)).limit(limit).offset(offset)
      : await db.select().from(licenses).orderBy(desc(licenses.renewalDate)).limit(limit).offset(offset);

    // Get total count
    const totalCount = conditions.length > 0
      ? await db.$count(licenses, and(...conditions))
      : await db.$count(licenses);

    return NextResponse.json({
      licenses: licenseData,
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
    });
  } catch (error) {
    console.error("Licenses API error:", error);
    return NextResponse.json({ error: "Failed to fetch licenses" }, { status: 500 });
  }
}
