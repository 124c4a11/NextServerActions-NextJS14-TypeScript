"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "./ui/Button";

interface FormButtonProps extends ButtonProps {
  text: string;
  pendingText: string;
}

export function FormButton({ text, pendingText, ...props }: FormButtonProps) {
  const { pending } = useFormStatus();

  return <Button {...props}>{pending ? pendingText : text}</Button>;
}
