import { FC } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

/**
 * It's a floating button that when clicked, navigates to the addForm page to add a form
 * @returns A button with a plus icon inside of it.
 */
const FloatingBtton: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        title="Contact Sale"
        onClick={() => {
          navigate("/addForm");
        }}
        className="fixed z-90 bottom-10 right-8 bg-[#5555ff] w-[65px] h-[65px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#52459c] hover:drop-shadow-2xl hover:animate-bounce duration-300"
      >
        <PlusIcon className="w-8" />
      </button>
    </div>
  );
};
export default FloatingBtton;
