import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-blue-600 text-amber-50 px-2  py-2  flex items-baseline justify-between">
        <h1 className="font-bold">React Router</h1>
        <nav className="flex gap-5">
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to ={'/contact'}>Contact</NavLink>
        </nav>
    </div>
  )
}
