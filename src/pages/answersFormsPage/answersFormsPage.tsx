import { FC } from "react";
import { useRecoilValue } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Form } from "../../utils/types";
import FormCard from "./components/formCard";

const AnswersFormsPage: FC = () => {
    const allForms: Form[] = useRecoilValue(allFormsState);
  return (
    <div className="flex flex-col w-full  h-screen p-16 items-center">
      {allForms.length === 0 ? (
        <div>
          <h1 className="text-3xl text-gray-900">No Answers yet</h1>
          <h1 className="text-md text-gray-900">please add one.</h1>
        </div>
      ) : (
        <div className="	columns-3 flex-wrap  flex w-full">
          {allForms.map((form: Form, index: number) => (
            <div>
              {form.answers.length !== 0 && (
                <div key={index} className="mr-5 mt-5">
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
