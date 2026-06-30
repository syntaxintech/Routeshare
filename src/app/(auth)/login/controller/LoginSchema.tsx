import z from "zod";
import { passwordPattern } from "../../register/constant/regexCode";

export const loginSchema = z.object({
  email: z.string().min(5, "Enter a valid email"),
  password: z
    .string()
    .min(4)
    .refine((text) => passwordPattern.password.test(text), {
      message: "Enter a valid password",
    }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
