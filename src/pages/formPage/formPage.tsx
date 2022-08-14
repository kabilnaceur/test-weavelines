import { FC, useState } from "react";
import { useLocation } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Form, Question, UserAnswer } from "../../utils/types";
import FormInformations from "./components/formInformations";
import QuestionCard from "./components/questionCard";
const FormPage: FC = () => {
  const location = useLocation();
  const locationState = location.state as Form;
  const formDetails: Form = locationState;
  const [userAnswers, setUserAnswers] = useState<UserAnswer>({
    userEmail: "",
    answers: [],
  });
   const allForms: Form[] = useRecoilValue(allFormsState);
   const setAllForms = useSetRecoilState(allFormsState);
  const confirmAnswers = (): void =>
  {
    const newFormAnswer = { ...formDetails, answers: [...formDetails.answers, userAnswers] }
    let newForm: Form[] = [...allForms];
    newForm = newForm?.map((f: Form) =>
      (f.title === formDetails.title &&
      f.description === formDetails.description)
        ? newFormAnswer
        : f
    );
    setAllForms(newForm);
  }
  console.log("allForms", allForms);

  return (
    <div className="flex flex-col w-full h-screen p-16 ">
      <FormInformations
        formDetails={formDetails}
        userAnswers={userAnswers}
        setUserAnswers={setUserAnswers}
      />
      {formDetails.questions.map((qs: Question, index: number) => (
        <QuestionCard
          key={index}
          question={qs}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
        />
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
