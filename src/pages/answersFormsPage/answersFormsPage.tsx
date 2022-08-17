import { FC } from "react";
import { useRecoilValue } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Form } from "../../utils/types";
import FormCard from "./components/formCard";

/* A React component that is using Recoil to get the state of all the forms and desplay a screen to all forms has an answer array*/
const AnswersFormsPage: FC = () => {
    const allForms: Form[] = useRecoilValue(allFormsState);
  return (
    <div
      className={
        allForms.length === 0
          ? "flex flex-col w-full  h-screen items-center justify-center  pt-[100px]"
          : "flex flex-col w-full  h-screen pt-[100px] items-center pl-10"
      }
    >
      <div className=" w-full p-5">
        <h1 className="text-3xl font-bold mr-4 sm:text-3xl text-black">
          Answers
        </h1>
      </div>
      {allForms.length === 0 ? (
        <div className="h-full">
          <h1 className="text-3xl text-black font-sans">No answers yet</h1>
          <h1 className="text-xl text-black  font-sans ml-7 ">
            please add one.
          </h1>
        </div>
      ) : (
        <div className="	columns-3 flex-wrap  flex w-full">
          {allForms.map((form: Form, index: number) => (
            <div key={index}>
              {form.answers.length !== 0 && (
                <div className="mr-5 mt-5">
                  <FormCard form={form} index={index} />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default AnswersFormsPage;
