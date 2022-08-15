import { FC, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Form, Question } from "../../utils/types";
import AddCard from "./components/addCard";
import FormInformations from "./components/formInformations";
import QuestionCard from "./components/questionCard";
import { useNavigate } from "react-router-dom";

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
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#C27DFC] rounded-lg hover:bg-[#9d63ce]  focus:ring-4 focus:outline-none focus:ring-blue-30"
        >
          Add
        </button>
        <button
          onClick={createForm}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#C27DFC] rounded-lg hover:bg-[#9d63ce]  focus:ring-4 focus:outline-none focus:ring-blue-30"
        >
          Create
        </button>
      </div>
    </div>
  );
};
export default AddFormPage;
