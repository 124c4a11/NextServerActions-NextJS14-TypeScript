"use server";

import { URL_TODOES } from "@/api/todoes.api";
import { revalidatePath } from "next/cache";

export async function createTodo(prevState: any, formData: FormData) {
  "use server";

  const title = formData.get("title");

  if (!title) return "Enter a task name";

  const todo = {
    id: crypto.randomUUID(),
    title,
  };

  try {
    await fetch(URL_TODOES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    revalidatePath("/");
  } catch (error) {
    return "Failed to create";
  }
}

export async function updateTodo(formData: FormData) {
  "use server";

  const title = formData.get("title");

  if (!title) return;

  try {
    await fetch(`${URL_TODOES}/${formData.get("id")}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: formData.get("title") }),
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(formData: FormData) {
  "use server";

  try {
    await fetch(`${URL_TODOES}/${formData.get("id")}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}
