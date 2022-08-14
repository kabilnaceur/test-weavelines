import { FC, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Form, Question } from "../../utils/types";
import AddCard from "./components/addCard";
import FormInformations from "./components/formInformations";
import QuestionCard from "./components/questionCard";
import { Outlet, useNavigate } from "react-router-dom";

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
  const createForm = (): void => {
    setAllForms([...allForms, formDetails]);
    navigate("/");
  };
  return (
    <div className="flex flex-col w-full h-screen p-16 ">
      <FormInformations
        formDetails={formDetails}
        setFormDetails={setFormDetails}
      />
      <div>
        {formDetails.questions.map((qs: Question, index: number) => (
          <QuestionCard question={qs} key={index} />
        ))}
      </div>
      <AddCard question={question} setQuestion={setQuestion} />
      <div className="columns-3 m-10 flex items-center space-x-4 justify-end pb-10">
        <button
          onClick={addFormQuestion}
          className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Add
        </button>
        <button
          onClick={createForm}
          className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Create
        </button>
      </div>
      <Outlet />
    </div>
  );
};
export default AddFormPage;
