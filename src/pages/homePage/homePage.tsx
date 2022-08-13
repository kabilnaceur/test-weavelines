import { FC } from "react";
import AddCard from "./components/addCard";
const HomePage: FC = () => {
  return (
    <div className="flex flex-col w-full h-screen p-16">
      <AddCard />
      <div className="columns-3 m-10 flex items-center space-x-4 justify-end">
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Add
        </button>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Create
        </button>
      </div>
    </div>
  );
};
export default HomePage;
