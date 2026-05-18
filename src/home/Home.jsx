import { useSelector } from "react-redux";

export default function Home() {
  const todos = useSelector((state) => state.todo.todos);

  console.log(todos);

  return <div>Home</div>;
}