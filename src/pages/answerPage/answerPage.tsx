import { FC, useState } from "react";
import { useLocation } from "react-router";
import { Form, UserAnswer } from "../../utils/types";
import AnswerCard from "./components/answerCard";
const AnswerPage: FC = () => {
  const location = useLocation();
  const locationState = location.state as Form;
    const [allAnswers, setAllAnswers] = useState<UserAnswer[]>(locationState.answers);
  return (
    <div className="flex flex-col w-full h-screen p-16 ">
      {allAnswers.map((answer: UserAnswer, index: number) => (
        <AnswerCard
          answer={answer}
          key={index}
          index={index}
          form={locationState}
          setAllAnswers={setAllAnswers}
        />
      ))}
    </div>
  );
};
export default AnswerPage;
