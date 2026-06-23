import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function AuthLoginPage() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Card className="w-full max-w-[500px] p-6">
          <h1 className="text-xl text-center">Login</h1>
          <FieldGroup>
            <Field>
              <FieldLabel className="text-[17px]" htmlFor="fieldgroup-name">
                Name
              </FieldLabel>
              <Input
                id="fieldgroup-name"
                className="py-5 text-[17px]"
                placeholder="Jordan Lee"
              />
            </Field>
            <Field>
              <FieldLabel className="text-[17px]" htmlFor="fieldgroup-email">
                Email
              </FieldLabel>
              <Input
                id="fieldgroup-email"
                type="email"
                className="py-5 text-[17px]"
                placeholder="name@example.com"
              />
            </Field>
            <Field orientation="horizontal">
              <Button
                className="py-5 px-7 text-[17px]"
                type="reset"
                variant="outline"
              >
                Cancel
              </Button>
              <Button className="py-5 px-7 text-[17px]" type="submit">
                Submit
              </Button>
            </Field>
          </FieldGroup>
        </Card>
      </div>
    </div>
  );
}
