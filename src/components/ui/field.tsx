import * as React from "react";
import { cn } from "@/lib/utils";

const FieldGroup = React.forwardRef<
  HTMLFieldSetElement,
  React.HTMLAttributes<HTMLFieldSetElement>
>(({ className, ...props }, ref) => (
  <fieldset ref={ref} className={cn("space-y-6", className)} {...props} />
));
FieldGroup.displayName = "FieldGroup";

// 1. We create a custom interface to teach TypeScript about the orientation prop
interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "vertical" | "horizontal";
}

// 2. We apply the interface and set the default to "vertical"
const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation = "vertical", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex",
        // 3. We dynamically swap the flex classes based on the prop!
        orientation === "horizontal"
          ? "flex-row items-center space-x-3 space-y-0"
          : "flex-col space-y-2",
        className,
      )}
      {...props}
    />
  ),
);
Field.displayName = "Field";

const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground",
      className,
    )}
    {...props}
  />
));
FieldLabel.displayName = "FieldLabel";

export { FieldGroup, Field, FieldLabel };
