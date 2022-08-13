import { FC,useState } from "react";
import {MenuIcon , XIcon} from '@heroicons/react/outline'
import { NavLink } from "react-router-dom";
const Navbar: FC = () => {
    const [nav, setNav] = useState<boolean>(false)
    const handleClick = ():void => setNav(!nav)
  return (
    <div className="w-screen h-[60px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex item-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
            Weavelines form
          </h1>
        </div>
        <ul className="hidden md:flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/form">Form</NavLink>
          </li>
          <li><NavLink to="/answer">Answer</NavLink></li>
        </ul>

        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={nav ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
        <li className="border-b-2 border-zinc-300 w-full"><NavLink to="/">Home</NavLink></li>
        <li className="border-b-2 border-zinc-300 w-full"><NavLink to="/form">Form</NavLink></li>
        <li className="border-b-2 border-zinc-300 w-full"><NavLink to="/answer">Answer</NavLink></li>
      </ul>
    </div>
  );
};
export default Navbar;
