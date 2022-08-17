import { FC } from "react";
import { QuestionAnswerCardProps } from "../../../utils/interfaces";
const QuestionCard: FC<QuestionAnswerCardProps> = ({
  question,
  register,
  index,
  errors
}) => {

  return (
    <div>
      <div className=" p-6 bg-white rounded-xl shadow-lg items-center space-x-4 mb-5">
        <div className="grid">
          <div className="flex justify-around">
            <div className="w-full p-6">
              {errors?.answers?.some?.((answer: any, i) => i === index) && (
                <label className="block text-sm font-medium text-red-600 mt-5">
                  this is a required field
                </label>
              )}
              {question.isRequired ? (
                <label className="block mb-2 text-sm font-medium text-black ">
                  {question.content} *
                </label>
              ) : (
                <label className="block mb-2 text-sm font-medium text-black ">
                  {question.content}
                </label>
              )}
              {question.type === "selectInput" ? (
                <select
                  {...register(`answers.${index}.question`, {
                    value: question.content,
                  })}
                  {...register(`answers.${index}.isRequired`, {
                    value: question.isRequired,
                  })}
                  {...register(`answers.${index}.answer`)}
                  id="answers"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>{question.content}</option>
                  {question.options.map((opt: string, i: number) => (
                    <option value={opt} key={i}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : question.type === "checkbox" ? (
                <div>
                  {question.options.map((opt: string, i: number) => (
                    <div className="p-2" key={i}>
                      <input
                        {...register(`answers.${index}.question`, {
                          value: question.content,
                        })}
                        {...register(`answers.${index}.isRequired`, {
                          value: question.isRequired,
                        })}
                        {...register(`answers.${index}.answer`)}
                        id="checked-checkbox"
                        type="checkbox"
                        value={opt}
                        className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-50 focus:ring-2"
                      />
                      <label className="ml-2 text-md font-medium text-black">
                        {opt}
                      </label>
                    </div>
                  ))}
                </div>
              ) : question.type === "radioButton" ? (
                <div>
                  {question.options.map((opt: string, i: number) => (
                    <div className="flex items-center mb-4" key={i}>
                      <input
                        {...register(`answers.${index}.question`, {
                          value: question.content,
                        })}
                        {...register(`answers.${index}.isRequired`, {
                          value: question.isRequired,
                        })}
                        {...register(`answers.${index}.answer`)}
                        id={opt}
                        type="radio"
                        value={opt}
                      />
                      <label className="ml-2 text-md font-medium text-black">
                        {opt}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <input
                  {...register(`answers.${index}.question`, {
                    value: question.content,
                  })}
                  {...register(`answers.${index}.isRequired`, {
                    value: question.isRequired,
                  })}
                  {...register(`answers.${index}.answer`)}
                  type="text"
                  id={question.content}
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
