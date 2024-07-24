import { InputHTMLAttributes } from "react";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

export function TextField({ className = "", ...props }: TextFieldProps) {
  return (
    <input
      type="text"
      className={`p-2 border rounded-md shadow-xl ${className}`}
      {...props}
    />
  );
}
