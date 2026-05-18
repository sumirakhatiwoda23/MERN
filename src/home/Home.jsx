import { useSelector } from "react-redux";
import { Button } from "../components/ui/button.jsx";
import { EditIcon, TrashIcon } from "lucide-react";

export default function Home() {

  // FROM SECOND CODE
  const todos = useSelector(
    (state) => state.todo.todos
  );

  console.log(todos);

  return (
    <div>
      <h1 className="text-2xl font-bold p-5">
        Home
      </h1>

      {/* FROM FIRST CODE */}
      <div className="grid gap-5 grid-cols-3 p-5">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="shadow-xs border rounded-md p-3"
          >

            <h1>{todo.email}</h1>

            <p>{todo.gender}</p>

            <h3>{todo.country}</h3>

            {/* OPTIONAL IMAGE */}
            {todo.image && (
              <img
                src={todo.image}
                alt="todo"
                className="w-full h-40 object-cover rounded-md mt-3"
              />
            )}

            <div className="mt-3 flex gap-5">
              <Button variant="outline">
                <EditIcon />
              </Button>

              <Button variant="outline">
                <TrashIcon />
              </Button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}