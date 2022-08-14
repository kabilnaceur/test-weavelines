import { FC } from "react";
import { AnswerProps } from "../../../utils/interfaces";
import { Answer } from "../../../utils/types";

const AnswerCard : FC<AnswerProps> = ({answer}) => {
  return (
    <div>
      <div className=" p-6 bg-white rounded-xl shadow-lg items-center space-x-4 mb-5">
        <div className="grid">
          <div className="flex justify-around">
            <div className="w-full p-6">
              <h1 className="text-3xl text-gray-900">{answer.userEmail}</h1>
              <div className="mt-5">
                {answer.answers.map((ans: Answer, index: number) => (
                  <div className="columns-2" key={index}>
                    <h1 className="text-md text-gray-900">
                      {index + 1}- {ans.question} :
                    </h1>
                    <h1 className="text-md text-gray-900">{ans.answer}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnswerCard;
