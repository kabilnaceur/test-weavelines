import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Form, Question, UserAnswer } from "../../utils/types";
import FormInformations from "./components/formInformations";
import QuestionCard from "./components/questionCard";
const FormPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationState = location.state as Form;
  const [showModal, setShowModal] = useState<boolean>(false);
  const formDetails: Form = locationState;
  const [userAnswers, setUserAnswers] = useState<UserAnswer>({
    userEmail: "",
    answers: [],
  });
  const allForms: Form[] = useRecoilValue(allFormsState);
  const setAllForms = useSetRecoilState(allFormsState);
  const confirmAnswers = (): void => {
    const newFormAnswer = {
      ...formDetails,
      answers: [...formDetails.answers, userAnswers],
    };
    let newForm: Form[] = [...allForms];
    newForm = newForm?.map((f: Form) =>
      f.title === formDetails.title && f.description === formDetails.description
        ? newFormAnswer
        : f
    );
    setAllForms(newForm);
    setShowModal(true);
  };
  const resetAnswers = ():void => {
    setUserAnswers({
      userEmail: "",
      answers: [],
    });
    setShowModal(false);
  };
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
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#C27DFC] rounded-lg hover:bg-[#9d63ce]  focus:ring-4 focus:outline-none focus:ring-blue-30"
        >
          Confirm
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-[#243B67]">
                    Answer added
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-[#243B67] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <h3 className="text-3xl font-semibold text-[#243B67]">x</h3>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Thank you for your answer if you want see all answers .
                  </p>
                </div>
                {/*footer*/}
                <div className="columns-3 flex items-center space-x-4 justify-end pb-10 pr-5">
                  <button
                    onClick={resetAnswers}
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#C27DFC] rounded-lg hover:bg-[#9d63ce]  focus:ring-4 focus:outline-none focus:ring-blue-30"
                  >
                    Answer again
                  </button>
                  <button
                    onClick={() => navigate("/answersForms")}
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#C27DFC] rounded-lg hover:bg-[#9d63ce]  focus:ring-4 focus:outline-none focus:ring-blue-30"
                  >
                    See Answers
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};
export default FormPage;
