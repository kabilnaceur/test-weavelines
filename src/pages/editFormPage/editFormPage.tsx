import { FC, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Form, Question } from "../../utils/types";
import AddCard from "./components/addCard";
import FormInformations from "./components/formInformations";
import QuestionCard from "./components/questionCard";
import { useLocation, useNavigate } from "react-router-dom";

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
  console.log(formDetails);
  const editForm = (): void => {
    let newAllForms: Form[] = [...allForms];
    newAllForms = newAllForms?.map((f: Form) =>
      f.title === locationState.title &&
      f.description === locationState.description
        ? formDetails
        : f
    );
    console.log("newAllForms", newAllForms);
    setAllForms(newAllForms);
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
      <AddCard
        question={question}
        setQuestion={setQuestion}
        formDetails={formDetails}
        setFormDetails={setFormDetails}
      />
      <div className="columns-3 m-10 flex items-center space-x-4 justify-end pb-10">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          onClick={editForm}
          className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
export default EditFormPage;
