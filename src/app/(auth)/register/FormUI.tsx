"use client";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";
import { type RegisterSchema } from "./controller/RegisterSchema";

interface onFormSubmitProp {
  onFormSubmit: (data: RegisterSchema) => void;
}
export default function FormUI({ onFormSubmit }: onFormSubmitProp) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<RegisterSchema>();
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Field>
        <Field data-invalid={!!errors.name}>
          <FieldLabel className="text-[17px]" htmlFor="input-field-username">
            Username:
            <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="input-field-username"
            type="text"
            className="py-5 text-[17px] "
            {...register("name")}
            aria-invalid={!!errors.name}
            placeholder="Enter your username"
          />
          <FieldDescription aria-invalid={!!errors.name}>
            {errors.name?.message}
          </FieldDescription>
        </Field>

        <Field data-invalid={!!errors.email}>
          <FieldLabel className="text-[17px]" htmlFor="input-field-username">
            Email:
            <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="input-field-email"
            type="email"
            className="py-5 text-[17px] "
            {...register("email")}
            aria-invalid={!!errors.email}
            placeholder="Enter your username"
          />
          <FieldDescription aria-invalid={!!errors.email}>
            {errors.email?.message}
          </FieldDescription>
        </Field>

        <Field data-invalid={!!errors.password}>
          <FieldLabel className="text-[17px]" htmlFor="input-field-password">
            Password:
            <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="input-field-password"
            type="password"
            className="py-5 text-[17px] "
            {...register("password")}
            aria-invalid={!!errors.password}
            placeholder="Enter your Password"
          />
          <FieldDescription aria-invalid={!!errors.password}>
            {errors.password?.message}
          </FieldDescription>
        </Field>

        <Field data-invalid={!!errors.confirmPassword}>
          <FieldLabel className="text-[17px]" htmlFor="input-field-password">
            Confirm Password:
          </FieldLabel>
          <Input
            id="input-field-password"
            type="password"
            className="py-5 text-[17px] "
            {...register("confirmPassword")}
            aria-invalid={!!errors.confirmPassword}
            placeholder="Enter your password"
          />
          <FieldDescription aria-invalid={!!errors.confirmPassword}>
            {errors.confirmPassword?.message}
          </FieldDescription>
        </Field>

        <Field orientation="horizontal" className="mt-5">
          <Button
            className="py-5 px-7 text-[17px]"
            variant="secondary"
            type="submit"
          >
            Submit
          </Button>
          <Button
            className="py-5 px-7 text-[17px]"
            variant="outline"
            type="button"
          >
            Cancel
          </Button>
        </Field>
      </Field>
    </form>
  );
}
