import { FC } from "react";
import { useLocation } from "react-router";
import { UserAnswer } from "../../utils/types";
import AnswerCard from "./components/answerCard";
const AnswerPage: FC = () => {
const location = useLocation();
 const locationState = location.state as UserAnswer[];
  const allAnswers: UserAnswer[] = locationState;
  console.log("allAnswers", allAnswers);
    return (
      <div className="flex flex-col w-full h-screen p-16 ">
        {allAnswers.map((answer: UserAnswer, index: number) => (
            <AnswerCard answer={answer} key={ index} />
        ))}
      </div>
    );
};
export default AnswerPage;
