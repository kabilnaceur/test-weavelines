import { FC, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Form, Question } from "../../utils/types";
import AddCard from "./components/addCard";
import FormInformations from "./components/formInformations";
import QuestionCard from "./components/questionCard";
import { useNavigate } from "react-router-dom";

/* A function component that is used to show add form screen. */
const AddFormPage: FC = () => {
  const navigate = useNavigate();
  const allForms: Form[] = useRecoilValue(allFormsState);
  const setAllForms = useSetRecoilState(allFormsState);
  const [formDetails, setFormDetails] = useState<Form>({
    title: "Form title",
    description: "",
    questions: [],
    answers: [],
  });
  const [question, setQuestion] = useState<Question>({
    content: "Question",
    type: "textField",
    isRequired: false,
    options: [],
  });
/**
 * It takes the current formDetails and adds the current question to the questions array
 * that's mean when user add a form component it will add to the question array for a form
 */
  const addFormQuestion = (): any => {
    setFormDetails({
      ...formDetails,
      questions: [...formDetails.questions, question],
    });
    setQuestion({
      content: "Question",
      type: "textField",
      isRequired: false,
      options: [],
    });
  };
/**
 * It takes the current state of the formDetails object and adds it to the allForms array
 * that's mean add a form to the user form array and navigate to all forms screen to answer or add other form
 */
  const createForm = (): void => {
    setAllForms([...allForms, formDetails]);
    navigate("/");
  };
  return (
    <div className="flex flex-col w-full h-screen p-[100px] ">
      <div className=" w-full p-6">
        <h1 className="text-3xl font-bold mr-4 sm:text-3xl text-black">
          Add forms
        </h1>
      </div>
      <FormInformations
        formDetails={formDetails}
        setFormDetails={setFormDetails}
      />
      <div>
        {formDetails.questions.map((qs: Question, index: number) => (
          <QuestionCard
            question={qs}
            key={index}
            formDetails={formDetails}
            setFormDetails={setFormDetails}
            index={index}
          />
        ))}
      </div>
      <AddCard question={question} setQuestion={setQuestion} />
      <div className="columns-3 m-10 flex items-center space-x-4 justify-end pb-10">
        <button
          onClick={addFormQuestion}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#5555ff] rounded-lg hover:bg-[#3c3cbd]   focus:ring-4 focus:outline-none focus:ring-blue-30 font-sans"
        >
          Add
        </button>
        <button
          onClick={createForm}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#5555ff] rounded-lg hover:bg-[#3c3cbd]   focus:ring-4 focus:outline-none focus:ring-blue-30 font-sans"
        >
          Create
        </button>
      </div>
    </div>
  );
};
export default AddFormPage;
