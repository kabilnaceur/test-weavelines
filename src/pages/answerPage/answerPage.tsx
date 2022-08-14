import { FC } from "react";
import { useRecoilValue } from "recoil";
import { userAnswersState } from "../../recoil/globaleStates";
import { UserAnswer } from "../../utils/types";
const AnswerPage: FC = () => {
    const userAnswers: UserAnswer = useRecoilValue(userAnswersState);
    console.log("userAnswers", userAnswers);

  return <div></div>;
};
export default AnswerPage;
