import { getTodoes } from "@/api/todoes.api";
import { FormCreateTodo } from "@/components/FormCreateTodo";
import { TodoList } from "@/components/TodoList";

export default async function Home() {
  const todoes = await getTodoes();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-5">
      <div className="w-full max-w-lg">
        <FormCreateTodo />

        {!!todoes.length && <TodoList todoes={todoes} className="mt-10" />}
      </div>
    </main>
  );
}
