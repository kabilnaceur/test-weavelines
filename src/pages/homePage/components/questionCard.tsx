import { FC } from "react";
import { QuestionCardProps } from "../../../utils/interfaces";
const QuestionCard: FC<QuestionCardProps> = ({ question }) => {
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
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>{question.content}</option>
                  {question.options.map((opt: string) => (
                    <option value={opt}>{opt}</option>
                  ))}
                </select>
              ) : question.type === "checkbox" ? (
                <div>
                  {question.options.map((opt: string) => (
                    <div className="p-2">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
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
                  {question.options.map((opt: string) => (
                    <div className="flex items-center mb-4">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
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
