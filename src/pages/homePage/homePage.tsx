import { FC } from "react";
import { useRecoilValue } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Form } from "../../utils/types";
import FormCard from "./components/formCard";
import { PlusCircleIcon } from "@heroicons/react/outline";

const HomePage: FC = () => {
    const allForms: Form[] = useRecoilValue(allFormsState);

  return (
    <div
      className={
        allForms.length === 0
          ? "flex flex-col w-full  h-screen items-center justify-center"
          : "flex flex-col w-full  h-screen pt-16 items-center pl-10"
      }
    >
      {allForms.length === 0 ? (
        <div>
          <h1 className="text-3xl text-[#243B67] font-sans">No forms yet</h1>
          <h1 className="text-xl text-[#243B67]  font-sans ml-3 ">
            please add one.
          </h1>
          <PlusCircleIcon className="w-10 ml-12 text-[#243B67] " />
        </div>
      ) : (
        <div className="	columns-3  flex w-full flex-wrap ">
          {allForms.map((form: Form, index: number) => (
            <FormCard key={index} form={form} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};
export default HomePage;
