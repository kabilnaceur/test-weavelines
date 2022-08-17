import { FC, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import { allFormsState } from "../recoil/globaleStates";
import { useResetRecoilState } from "recoil";
import logo from "../assets/images/weavelines-logo.png";
/**
 * It's a functional component that renders a navbar with a logo, two links :
 * - forms to navigate to all forms added screen 
 *  * - Forms to navigate to all forms added screen 
 *  * - Answers to navigate to all answers added screen 
 *  and a button
 * @returns A React component
 */
const Navbar: FC = () => {
  const [nav, setNav] = useState<boolean>(false);
/**
 * It sets the nav state to the opposite of what it is to show a options menu when the screen will be little .
 */
  const handleClick = (): void => setNav(!nav);
/* It's a recoil hook that resets the state of allFormsState to the initial value the's mean delete all forms and set it to empty array */
  const resetForms = useResetRecoilState(allFormsState);

  return (
    <div className="w-screen h-[90px] z-10 bg-[#000000] fixed drop-shadow-lg opacity-[0.9]">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex item-center colomn-2">
          <img
            className="w-[180px] h-[30px] mr-2 ml-10"
            src={logo}
            alt="logo"
          />

          <h1 className="text-2xl font-bold mr-4 sm:text-2xl text-[#FFFFFF]">
            Forms
          </h1>
        </div>
        <ul className="hidden font-bold md:flex text-[#FFFFFF]  ">
          <li className="hover:border-b-2 hover:border-[#5555ff]  w-full">
            <NavLink to="/">Forms</NavLink>
          </li>
          <li className="hover:border-b-2 hover:border-[#5555ff]  w-full">
            <NavLink
              to="/answersForms"
            >
              Answers
            </NavLink>
          </li>
        </ul>
        <div className="hidden md:flex mr-6">
          <button
            onClick={() => {
              resetForms();
            }}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#5555ff] rounded-lg hover:bg-[#3c3cbd]  focus:ring-4 focus:outline-none focus:ring-blue-30"
          >
            Reset forms
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-6 text-white" />
          ) : (
            <XIcon className="w-6 text-white" />
          )}
        </div>
      </div>
      <ul className={nav ? "absolute bg-black w-full px-8" : "hidden"}>
        <li className="border-b-2 border-[#5555ff]  w-full text-white font-bold">
          <NavLink to="/">Forms</NavLink>
        </li>
        <li className="border-b-2 border-[#5555ff]  w-full text-white font-bold">
          <NavLink to="/answersForms">Answers</NavLink>
        </li>
        <div className="p-6">
          <button
            onClick={() => {
              handleClick();
              resetForms();
            }}
            className=" py-2 px-4 text-sm font-medium text-center text-white bg-[#5555ff] rounded-lg hover:bg-[#3c3cbd]  focus:ring-4 focus:outline-none focus:ring-blue-30 w-full items-center"
          >
            Reset forms
          </button>
        </div>
      </ul>
    </div>
  );
};
export default Navbar;
