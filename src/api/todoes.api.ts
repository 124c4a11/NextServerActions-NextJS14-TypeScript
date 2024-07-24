import { getFetchData } from "@/helpers/getFetchData";
import { Todo } from "@/types/todo";

export const URL_TODOES = "http://localhost:3001/todoes";

export async function getTodoes() {
  return (await getFetchData<Todo[]>(fetch(URL_TODOES))) ?? [];
}
