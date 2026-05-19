import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { EditIcon } from "lucide-react";
import DeleteTodo from "@/todos/DeleteTodo";
import { useNavigate } from "react-router";

export default function Home() {
  const nav = useNavigate();
  const { todos } = useSelector((state) => state.todoSlice);

  console.log(todos);

  return (
    <div>
      <h1 className="text-2xl font-bold p-5">
        Home
      </h1>

      <div className="grid gap-5 grid-cols-3 p-5">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="shadow-xs border rounded-md p-3"
          >
            <h1>{todo.email}</h1>
            <p>{todo.gender}</p>
            <h3>{todo.country}</h3>

            {todo.image && (
              <img
                src={todo.image}
                alt="todo"
                className="w-full h-40 object-cover rounded-md mt-3"
              />
            )}

            <div className="mt-3 flex gap-5">
              <Button
                onClick={() => nav(`/update-todo/${todo.id}`)}
                variant="outline"
              >
                <EditIcon />
              </Button>
              <DeleteTodo id={todo.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}