import { FC, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import { allFormsState } from "../recoil/globaleStates";
import { useResetRecoilState } from "recoil";
import logo from "../assets/images/weavelines-logo.png";
const Navbar: FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleClick = (): void => setNav(!nav);
  const resetForms = useResetRecoilState(allFormsState);

  return (
    <div className="w-screen h-[60px] z-10 bg-[#243B67] fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex item-center colomn-2">
          <img className="w-[220px] mr-10 ml-5" src={logo} alt="logo" />

          <h1 className="text-xl font-bold mr-4 sm:text-4xl text-[#EAEBED]">
            Form
          </h1>
        </div>
        <ul className="hidden md:flex text-[#EAEBED]">
          <li>
            <NavLink to="/">Forms</NavLink>
          </li>
          <li>
            <NavLink to="/answersForms">Answers</NavLink>
          </li>
        </ul>
        <div className="hidden md:flex mr-6">
          <button
            onClick={() => {
              resetForms();
            }}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#C27DFC] rounded-lg hover:bg-[#9d63ce]  focus:ring-4 focus:outline-none focus:ring-blue-30"
          >
            Reset forms
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={nav ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink to="/">Forms</NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink to="/answersForms">Answers</NavLink>
        </li>
        <div className="p-6">
          <button
            onClick={() => {
              handleClick();
              resetForms();
            }}
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 w-full"
          >
            Reset forms
          </button>
        </div>
      </ul>
    </div>
  );
};
export default Navbar;
