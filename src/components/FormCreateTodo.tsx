"use client";

import { createTodo } from "@/actions/todoes.actions";
import { FormButton } from "./FormButton.client";
import { TextField } from "./ui/TextField";
import { FormHTMLAttributes, useRef } from "react";
import { useFormState } from "react-dom";

type FormCreateTodoProps = FormHTMLAttributes<HTMLFormElement>;

export function FormCreateTodo(props: FormCreateTodoProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(createTodo, null);

  async function action(formData: FormData) {
    await formAction(formData);
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={action} {...props}>
      <TextField name="title" className={`block w-full`} />

      <FormButton
        text="Create Todo"
        pendingText="Creating..."
        className="block w-full mt-2 bg-blue-500 text-white"
      />

      {state && <p className="text-red-500">{state}</p>}
    </form>
  );
}
