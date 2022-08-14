import { FC, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { formState, userAnswersState } from "../../recoil/globaleStates";
import { Answer, Form, Question, UserAnswer } from "../../utils/types";
import FormInformations from "./components/formInformations";
import QuestionCard from "./components/questionCard";
const FormPage: FC = () => {
  const formDetails: Form = useRecoilValue(formState);
  const setUserAnswers = useSetRecoilState(userAnswersState);
  const userAnswers: UserAnswer = useRecoilValue(userAnswersState);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const confirmAnswers = (): void => setUserAnswers({ ...userAnswers ,answers});

  return (
    <div className="flex flex-col w-full h-screen p-16 ">
      <FormInformations
        formDetails={formDetails}
        userAnswers={userAnswers}
        setUserAnswers={setUserAnswers}
      />
      {formDetails.questions.map((qs: Question) => (
        <QuestionCard question={qs} answers={answers} setAnswers={setAnswers} />
      ))}
      <div className="columns-3 mt-5 flex items-center space-x-4 justify-end pb-10">
        <button
          onClick={confirmAnswers}
          className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default FormPage;
