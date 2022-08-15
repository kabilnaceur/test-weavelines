import { FC, useState } from "react";
import { QuestionCardProps } from "../../../utils/interfaces";
import { Form, Question } from "../../../utils/types";

const QuestionCard: FC<QuestionCardProps> = ({ question,formDetails,setFormDetails ,index}) => {
  const [show, setShow] = useState<Boolean>(false);
  const handleChangeShow = (): void => setShow(!show);
  const deleteQuestion = (): void => {
    const newQuestions: Question[] = [...formDetails.questions]
    newQuestions.splice(index, 1);
    const newForm: Form = { ...formDetails, questions: newQuestions }
    setFormDetails(newForm)
  }
  return (
    <div>
      <div className=" p-6 bg-white rounded-xl shadow-lg items-center space-x-4 mb-5">
        <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500  hover:bg-gray-100  focus:ring-4 focus:outline-none focus:ring-gray-200  rounded-lg text-sm p-1.5"
            type="button"
            onClick={handleChangeShow}
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>
          <div
            id="dropdown"
            className={
              show
                ? "absolute z-20 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow mt-10"
                : "hidden absolute z-20 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow mt-10"
            }
          >
            <ul className="py-1" aria-labelledby="dropdownButton">
              <li>
                <div className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100    ">
                  Edit
                </div>
              </li>
              <li>
                <div
                  onClick={deleteQuestion}
                  className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100    ">
                  Delete
                </div>
              </li>
            </ul>
          </div>
        </div>
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
                  id="selectInput"
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
                  {question.options.map((opt: string, index: number) => (
                    <div className="flex items-center mb-4" key={index}>
                      <input
                        id="default-radio"
                        type="radio"
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
