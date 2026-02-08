import { NavLink } from "react-router";

export default function Notfound() {
  return (
    <div className="p-5">
        <h1 className="text-xl text-red-500">Page Not Found</h1>
        <NavLink to={'/'} className={'underline'}>Please Go Back ! </NavLink>
    </div>
  )
}
