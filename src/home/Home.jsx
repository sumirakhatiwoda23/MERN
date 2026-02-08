import { NavLink, Outlet } from "react-router";
import Header from "../components/Header";


export default function Home() {
  return (
    <div>
        <Header/>
        <h1>This is Home page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero accusamus ex pariatur tenetur esse placeat adipisci cum ipsam modi!</p>
         <NavLink to={'/page1'}>Page 1</NavLink>
         <NavLink to={'/page2'}>Page 2</NavLink>

        <Outlet/>
    </div>
  )
}
