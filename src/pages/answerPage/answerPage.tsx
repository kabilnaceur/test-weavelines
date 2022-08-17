import { FC, useState } from "react";
import { useLocation } from "react-router";
import { Form, UserAnswer } from "../../utils/types";
import AnswerCard from "./components/answerCard";
/* A functional component that is using the useLocation hook to get the location state. It is then
using the useState hook to set the state of allAnswers to the locationState.answers.
to show a screen for all answer form
 */
const AnswerPage: FC = () => {
  const location = useLocation();
  const locationState = location.state as Form;
    const [allAnswers, setAllAnswers] = useState<UserAnswer[]>(locationState.answers);
  return (
    <div className="flex flex-col w-full h-screen p-[100px] ">
      <div className=" w-full p-6">
        <h1 className="text-3xl font-bold mr-4 sm:text-3xl text-black">
          Answers
        </h1>
      </div>
      {allAnswers.map((answer: UserAnswer, index: number) => (
        <AnswerCard
          answer={answer}
          key={index}
          index={index}
          form={locationState}
          setAllAnswers={setAllAnswers}
          allAnswers={allAnswers}
        />
      ))}
    </div>
  );
};
export default AnswerPage;
