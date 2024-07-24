import { updateTodo, deleteTodo } from "@/actions/todoes.actions";
import { Todo } from "@/types/todo";
import { HTMLAttributes } from "react";
import { FormButton } from "./FormButton.client";
import { TextField } from "./ui/TextField";

interface TodoListProps extends HTMLAttributes<HTMLElement> {
  todoes: Todo[];
}

export function TodoList({ todoes, ...props }: TodoListProps) {
  return (
    <ul {...props}>
      {todoes.map(({ id, title }) => (
        <li key={id} className="flex gap-x-2 mt-2">
          <form action={updateTodo} className="flex grow gap-x-2">
            <input type="hidden" name="id" value={id} />

            <TextField name="title" defaultValue={title} className="grow" />

            <FormButton
              text="Update"
              pendingText="Updating..."
              className="bg-green-500 text-white"
            />
          </form>

          <form action={deleteTodo} className="flex">
            <input type="hidden" name="id" value={id} />

            <FormButton
              text="Delete"
              pendingText="Deleting..."
              className="bg-red-500 text-white"
            />
          </form>
        </li>
      ))}
    </ul>
  );
}
