"use server";

import { hash } from "bcryptjs";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  company: string;
}

export async function signup(formData: SignupFormData) {
  try {
    // Check if user already exists
    const existingUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, formData.email),
    });

    if (existingUser) {
      return { error: "An account with this email already exists" };
    }

    // Hash password
    const hashedPassword = await hash(formData.password, 12);

    // Create user in database
    const [newUser] = await db
      .insert(users)
      .values({
        name: formData.name,
        email: formData.email,
        password: hashedPassword,
      })
      .returning();

    if (!newUser) {
      return { error: "Failed to create user" };
    }

    // Sign in the user automatically
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Authentication failed" };
    }
    console.error("Signup error:", error);
    return { error: "Something went wrong" };
  }
}
