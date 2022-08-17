import { FC, useState } from "react";
import { useLocation } from "react-router";
import { Form, UserAnswer } from "../../utils/types";
import AnswerCard from "./components/answerCard";
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
