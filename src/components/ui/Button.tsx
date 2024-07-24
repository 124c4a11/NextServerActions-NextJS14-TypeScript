import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-md p-2 rounded-md shadow-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
