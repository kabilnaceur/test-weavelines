import { ChangeEvent, FC } from "react";
import { QuestionAnswerCardProps } from "../../../utils/interfaces";
import { Answer } from "../../../utils/types";
const QuestionCard: FC<QuestionAnswerCardProps> = ({
  question,
  setUserAnswers,
  userAnswers,
}) => {
  const addAnswer = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const newAnswers: Answer[] = [...userAnswers.answers];
    const index: number = newAnswers.findIndex(
      (a: Answer) => a.question === question.content
    );
    if (newAnswers.length === 0 || index === -1) {
      newAnswers.push({ question: question.content, answer: event.target.value});
    } else {
      newAnswers[index] = {
        question: question.content,
        answer: event.target.value,
      };
    }
    setUserAnswers({...userAnswers,answers:newAnswers})
  };
  return (
    <div>
      <div className=" p-6 bg-white rounded-xl shadow-lg items-center space-x-4 mb-5">
        <div className="grid">
          <div className="flex justify-around">
            <div className="w-full p-6">
              {question.isRequired ? (
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  {question.content} *
                </label>
              ) : (
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  {question.content}
                </label>
              )}
              {question.type === "selectInput" ? (
                <select
                  id="answers"
                  onChange={addAnswer}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>{question.content}</option>
                  {question.options.map((opt: string, index: number) => (
                    <option value={opt} key={index}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : question.type === "checkbox" ? (
                <div>
                  {question.options.map((opt: string, index: number) => (
                    <div className="p-2" key={index}>
                      <input
                        onChange={addAnswer}
                        id="checked-checkbox"
                        type="checkbox"
                        value={opt}
                        className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-50 focus:ring-2"
                      />
                      <label className="ml-2 text-md font-medium text-gray-900">
                        {opt}
                      </label>
                    </div>
                  ))}
                </div>
              ) : question.type === "radioButton" ? (
                <div>
                  {question.options.map((opt: string, index: number) => (
                    <div className="flex items-center mb-4" key={index}>
                      <input
                        onChange={addAnswer}
                        id="default-radio-1"
                        type="radio"
                        value={opt}
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
                      />
                      <label className="ml-2 text-md font-medium text-gray-900">
                        {opt}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  id={question.content}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder={question.content}
                  onChange={addAnswer}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
