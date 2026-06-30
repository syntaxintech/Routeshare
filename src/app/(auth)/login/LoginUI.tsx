import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useFormContext } from "react-hook-form";
import { LoginSchema } from "./controller/LoginSchema";

interface loginFormProp {
  loginForm: (data: LoginSchema) => void;
  showError: boolean;
}

export default function LoginUI({ loginForm, showError }: loginFormProp) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<LoginSchema>();
  return (
    <div className="min-h-screen flex flex-col text-white items-center justify-center">
      <Card className="w-full max-w-125 p-6 text-white">
        <form onSubmit={handleSubmit(loginForm)}>
          <h1 className="text-xl text-center">Login</h1>
          <FieldGroup>
            <Field data-invalid={!!errors.email}>
              <FieldLabel className="text-[17px]" htmlFor="fieldgroup-name">
                Email:
              </FieldLabel>
              <Input
                id="fieldgroup-name"
                className="py-5 text-[17px] "
                {...register("email")}
                aria-invalid={!!errors.email}
                placeholder="email@gmail.com"
              />
            </Field>
            <Field data-invalid={!!errors.password}>
              <FieldLabel className="text-[17px]" htmlFor="fieldgroup-password">
                Password:
              </FieldLabel>
              <Input
                id="fieldgroup-password"
                type="password"
                {...register("password")}
                aria-invalid={!!errors.password}
                className="py-5 text-[17px]"
                placeholder="Enter a valid password"
              />
            </Field>
            <Field data-invalid={showError}>
              <FieldLabel className="text-[13px]" htmlFor="fieldgroup-name">
                {showError ? "Invalid email and password" : ""}
              </FieldLabel>
            </Field>

            <Field orientation="horizontal">
              <Button className="py-5 text-[17px]" type="reset">
                Cancel
              </Button>
              <Button
                className="py-5 px-7 text-[17px]"
                variant="outline"
                type="submit"
              >
                Submit
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </Card>
    </div>
  );
}
