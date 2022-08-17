import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Answer, Form, Question, UserAnswer } from "../../utils/types";
import FormInformations from "./components/formInformations";
import QuestionCard from "./components/questionCard";
import { Resolver, useForm } from "react-hook-form";
import { ZoomIn } from "heroicons-react";
const resolver: Resolver<UserAnswer> = async (values) => {
    console.log(values)
    return {
      values: values.userEmail ? values : {},
      errors: !values.userEmail
        ? {
            userEmail: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
    };
  };
const FormPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<UserAnswer>({resolver});
  const onSubmit = (data: UserAnswer) => confirmAnswers();

  const locationState = location.state as Form;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userEmailError, setUserEmailError] = useState<boolean>(false);
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
    setUserEmailError(false);
  };
  const resetAnswers = (): void => {
    setUserAnswers({
      userEmail: "",
      answers: [],
    });
    setShowModal(false);
  };
  const validation = (): void => {
    if (!userAnswers.userEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
      setUserEmailError(true);
    else confirmAnswers();
  };

  return (
    <div className="flex flex-col w-full h-screen p-[100px] ">
      <div className=" w-full p-6">
        <h1 className="text-3xl font-bold mr-4 sm:text-3xl text-black">
          Add answer
        </h1>
      </div>
      <FormInformations
        formDetails={formDetails}
        userAnswers={userAnswers}
        setUserAnswers={setUserAnswers}
        userEmailError={userEmailError}
        register={register}
        errors={errors}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors?.userEmail && <p>{errors.userEmail.message}</p>}
        {formDetails.questions.map((qs: Question, index: number) => (
          <QuestionCard
            key={index}
            question={qs}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            register={register}
            index={index}
          />
        ))}
        <div className="columns-3 mt-5 flex items-center space-x-4 justify-end pb-10">
          <button
            type="submit"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#5555ff] rounded-lg hover:bg-[#3c3cbd]   focus:ring-4 focus:outline-none focus:ring-blue-30 font-sans"
          >
            Submit
          </button>
        </div>
      </form>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    Answer added
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <h3 className="text-3xl font-semibold text-black">x</h3>
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
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#5555ff] rounded-lg hover:bg-[#3c3cbd]   focus:ring-4 focus:outline-none focus:ring-blue-30 font-sans"
                  >
                    Answer again
                  </button>
                  <button
                    onClick={() => navigate("/answersForms")}
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#5555ff] rounded-lg hover:bg-[#3c3cbd]   focus:ring-4 focus:outline-none focus:ring-blue-30 font-sans"
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
