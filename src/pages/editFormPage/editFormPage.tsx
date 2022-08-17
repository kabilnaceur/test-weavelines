import { FC, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Form, Question } from "../../utils/types";
import AddCard from "./components/addCard";
import FormInformations from "./components/formInformations";
import QuestionCard from "./components/questionCard";
import { useLocation, useNavigate } from "react-router-dom";

/* A function component that is used to edit a form. so it's desplay a screen to edit */
const EditFormPage: FC = () => {
  const navigate = useNavigate();
  const allForms: Form[] = useRecoilValue(allFormsState);
  const setAllForms = useSetRecoilState(allFormsState);
  const location = useLocation();
  const locationState = location.state as Form;
  const [formDetails, setFormDetails] = useState<Form>(locationState);
  const [question, setQuestion] = useState<Question>({
    content: "Question",
    type: "textField",
    isRequired: false,
    options: [],
  });
 /**
  * It takes the current state of allForms, maps over it, and replaces the form that matches the title
  * and description of the form that was clicked on in the previous page with the new form details that
  * were entered in the form and edit it with the new value.
  */
  const editForm = (): void => {
    let newAllForms: Form[] = [...allForms];
    newAllForms = newAllForms?.map((f: Form) =>
      f.title === locationState.title &&
      f.description === locationState.description
        ? formDetails
        : f
    );
    setAllForms(newAllForms);
    navigate("/");
  };
  return (
    <div className="flex flex-col w-full h-screen p-[100px] ">
            <div className=" w-full p-6">
        <h1 className="text-3xl font-bold mr-4 sm:text-3xl text-black">
          Edit forms
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
      <AddCard
        question={question}
        setQuestion={setQuestion}
        formDetails={formDetails}
        setFormDetails={setFormDetails}
      />
      <div className="columns-3 m-10 flex items-center space-x-4 justify-end pb-10">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#5555ff] rounded-lg hover:bg-[#3c3cbd]   focus:ring-4 focus:outline-none focus:ring-blue-30 font-sans"
        >
          Cancel
        </button>
        <button
          onClick={editForm}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#5555ff] rounded-lg hover:bg-[#3c3cbd]   focus:ring-4 focus:outline-none focus:ring-blue-30 font-sans"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
export default EditFormPage;
