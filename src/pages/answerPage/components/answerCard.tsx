import { FC } from "react";
import { AnswerProps } from "../../../utils/interfaces";
import { Answer, Form, UserAnswer } from "../../../utils/types";
import { XIcon } from "@heroicons/react/outline";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { allFormsState } from "../../../recoil/globaleStates";

const AnswerCard: FC<AnswerProps> = ({ answer, index ,form,setAllAnswers,allAnswers}) => {
    const allForms: Form[] = useRecoilValue(allFormsState);
    const setAllForms = useSetRecoilState(allFormsState);
  const deleteAnswer = (): void => {
    const newAnswers: UserAnswer[] = [...allAnswers]
    newAnswers.splice(index, 1);
    const newForm: Form = { ...form, answers: newAnswers };
    setAllAnswers(newAnswers);
    let newAllForms: Form[] = [...allForms]
       newAllForms = newAllForms?.map((f: Form) =>
         f.title === form.title &&
         f.description === form.description
           ? newForm
           : f
       );
    setAllForms(newAllForms)
    console.log(newAllForms);
  }
  return (
    <div>
      <div className=" p-6 bg-white rounded-xl shadow-lg items-center space-x-4 mb-5">
        <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5"
            type="button"
            onClick={deleteAnswer}
          >
            <XIcon className="w-5 text-red-600" />
          </button>
        </div>
        <div className="grid">
          <div className="flex justify-around">
            <div className="w-full p-6">
              <h1 className="text-3xl text-gray-900">{answer.userEmail}</h1>
              <div className="mt-5">
                {answer.answers.map((ans: Answer, index: number) => (
                  <div className="columns-2" key={index}>
                    <h1 className="text-md text-gray-900">
                      {index + 1}- {ans.question} :
                    </h1>
                    <h1 className="text-md text-gray-900">{ans.answer}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnswerCard;
