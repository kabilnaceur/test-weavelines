import { FC } from "react";
import { useRecoilValue } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Form } from "../../utils/types";
import FormCard from "./components/formCard";
/* A React component that is using the Recoil library to get the state of all the forms. 
and desplay a screen with all forms that user added to answer to it
 */

const HomePage: FC = () => {
    const allForms: Form[] = useRecoilValue(allFormsState);

  return (
    <div
      className={
        allForms.length === 0
          ? "flex flex-col w-full  h-screen items-center justify-center pt-[100px]"
          : "flex flex-col w-full  h-screen pt-[100px] items-center pl-10"
      }
    >
      <div className=" w-full p-6">
        <h1 className="text-3xl font-bold mr-4 sm:text-3xl text-black">
          Forms
        </h1>
      </div>

      {allForms.length === 0 ? (
        <div className="h-full">
          <h1 className="text-3xl text-black font-sans">No forms yet</h1>
          <h1 className="text-xl text-black  font-sans ml-3 ">
            please add one.
          </h1>
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
