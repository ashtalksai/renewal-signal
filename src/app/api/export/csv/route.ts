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

    // Query database
    const licenseData = conditions.length > 0
      ? await db.select().from(licenses).where(and(...conditions)).orderBy(desc(licenses.renewalDate))
      : await db.select().from(licenses).orderBy(desc(licenses.renewalDate));

    // Convert to CSV
    const csvRows = [
      ["ID", "License Number", "First Name", "Last Name", "Business Name", "State", "Profession", "Specialty", "Status", "Renewal Date", "Email", "Phone", "Address", "City", "Zip Code"]
    ];

    licenseData.forEach((license) => {
      csvRows.push([
        license.id,
        license.licenseNumber,
        license.firstName,
        license.lastName,
        license.businessName || "",
        license.state,
        license.profession,
        license.specialty || "",
        license.status,
        license.renewalDate,
        license.email || "",
        license.phone || "",
        license.address || "",
        license.city || "",
        license.zipCode || "",
      ]);
    });

    // Convert to CSV string
    const csvContent = csvRows
      .map((row) =>
        row
          .map((field) => {
            const stringValue = String(field || "");
            // Escape quotes and wrap in quotes if contains comma or quote
            if (stringValue.includes(",") || stringValue.includes('"') || stringValue.includes("\n")) {
              return `"${stringValue.replace(/"/g, '""')}"`;
            }
            return stringValue;
          })
          .join(",")
      )
      .join("\n");

    // Return as downloadable file
    return new NextResponse(csvContent, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=licenses-export.csv",
      },
    });
  } catch (error) {
    console.error("CSV export error:", error);
    return NextResponse.json({ error: "Failed to export CSV" }, { status: 500 });
  }
}
