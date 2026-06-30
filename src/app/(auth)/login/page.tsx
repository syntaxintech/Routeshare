"use client";

import { FormProvider, useForm } from "react-hook-form";
import LoginUI from "./LoginUI";
import { loginSchema, LoginSchema } from "./controller/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginAction } from "@/app/auth/actions";

export default function AuthLoginPage() {
  const [showError, setShowError] = useState(false);
  const router = useRouter();
  const methods = useForm<LoginSchema>({
    mode: "all",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: LoginSchema) => {
    const response = await LoginAction(data);

    if (response.success) {
      alert("Login successfully");
      router.push("/dashboard");
    } else {
      setShowError((prev) => !prev);
    }
  };
  return (
    <FormProvider {...methods}>
      <div>
        <LoginUI loginForm={handleSubmit} showError={showError} />
      </div>
    </FormProvider>
  );
}
