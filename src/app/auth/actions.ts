"use server";

import { auth } from "@/lib/auth";
import { RegisterSchema } from "../(auth)/register/controller/RegisterSchema";
import { LoginSchema } from "../(auth)/login/controller/LoginSchema";
import { success } from "zod";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export async function RegisterAction(formData: RegisterSchema) {
  try {
    await auth.api.signUpEmail({
      body: {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
    });

    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err.message || "Something went wrong" };
  }
}

export async function LoginAction(formData: LoginSchema) {
  try {
    await auth.api.signInEmail({
      body: {
        email: formData.email,
        password: formData.password,
      },
    });
    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err.message || "Something went wrong" };
  }
}

export async function SignOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });

  const cookieStore = await cookies();
  cookieStore.delete("better-auth.session_token");
  redirect("/");
}
