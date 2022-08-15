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
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#C27DFC] rounded-lg hover:bg-[#9d63ce]  focus:ring-4 focus:outline-none focus:ring-blue-30"
        >
          Cancel
        </button>
        <button
          onClick={editForm}
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#C27DFC] rounded-lg hover:bg-[#9d63ce]  focus:ring-4 focus:outline-none focus:ring-blue-30"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
export default EditFormPage;
