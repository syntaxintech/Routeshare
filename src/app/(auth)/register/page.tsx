"use client";

import { Card } from "@/components/ui/card";
import FormUI from "./FormUI";
import { FormProvider, useForm } from "react-hook-form";
import {
  registerSchema,
  type RegisterSchema,
} from "./controller/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { RegisterAction } from "@/app/auth/actions";

export default function AuthRegisterPage() {
  const router = useRouter();
  const methods = useForm<RegisterSchema>({
    mode: "all",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (data: RegisterSchema) => {
    const result = await RegisterAction(data);

    if (result.success) {
      alert("Account created successfully");
      router.push("/dashboard");
    } else {
      alert("Account creation falied");
    }
  };
  return (
    <FormProvider {...methods}>
      <div className="min-h-screen flex flex-col text-white items-center justify-center">
        <Card className="w-full max-w-125 p-6 text-white">
          <h1 className="text-xl mb-5 text-center">Register Now</h1>
          <FormUI onFormSubmit={handleSubmit} />
        </Card>
      </div>
    </FormProvider>
  );
}
