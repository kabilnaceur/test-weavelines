import { FC } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const FloatingBtton: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        title="Contact Sale"
        onClick={() => {
          navigate("/addForm");
        }}
        className="fixed z-90 bottom-10 right-8 bg-[#6E5DCF] w-[65px] h-[65px] rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#52459c] hover:drop-shadow-2xl hover:animate-bounce duration-300"
      >
        <PlusIcon className="w-8" />
      </button>
      <Outlet />
    </div>
  );
};
export default FloatingBtton;
