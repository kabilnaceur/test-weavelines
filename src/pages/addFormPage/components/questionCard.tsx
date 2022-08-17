import { FC, useState ,ChangeEvent} from "react";
import { QuestionCardProps } from "../../../utils/interfaces";
import { Form, Question } from "../../../utils/types";
import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/outline";

/* The above code is a React component that is used to display a question in a form. */
const QuestionCard: FC<QuestionCardProps> = ({ question,formDetails,setFormDetails ,index}) => {
  const [show, setShow] = useState<Boolean>(false);
  const handleChangeShow = (): void => setShow(!show);
  const deleteQuestion = (): void => {
    const newQuestions: Question[] = [...formDetails.questions]
    newQuestions.splice(index, 1);
    const newForm: Form = { ...formDetails, questions: newQuestions }
    setFormDetails(newForm)
  }
  const [editQuestion, setEditQuestion] = useState<Question>(question);
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [option, setOption] = useState<string>("option");
  const addOptions = (): void => {
    setEditQuestion({
      ...editQuestion,
      options: [...editQuestion.options, option],
    });
    setOption("option");
  };
  const deleteOption = (option: string): void => {
    const newOptions: string[] = [...editQuestion.options];
    const index: number = newOptions.findIndex((o: string) => o === option);
    newOptions.splice(index, 1);
    const newQuestion: Question = { ...editQuestion, options: newOptions };
     setEditQuestion(newQuestion);
  };
  const editQuestionFunction = (): void => {
    let newQuestions:  Question[]= [...formDetails.questions]
    newQuestions = newQuestions?.map((q: Question, i: number) =>
          i===index
            ? editQuestion
            : q
    );
        const newForm: Form = { ...formDetails, questions: newQuestions };
    setFormDetails(newForm);
    setIsEdit(!isEdit)
  }
  return (
    <div>
      {isEdit ? (
        <div className=" p-6 bg-white rounded-xl shadow-lg items-center space-x-4 mb-5">
          <div className="grid">
            <div className="md:columns-2 flex justify-around">
              <div className="w-full p-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Question
                </label>
                <input
                  type="text"
                  value={editQuestion.content}
                  id="question"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Question"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEditQuestion({
                      ...editQuestion,
                      content: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-center mt-5">
                <input
                  checked={editQuestion.isRequired}
                  onChange={() =>
                    setEditQuestion({
                      ...editQuestion,
                      isRequired: !question.isRequired,
                    })
                  }
                  id="checked-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-50 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                />
                <label className="ml-2 text-sm font-medium text-black">
                  Require
                </label>
              </div>
            </div>
            <div className="md:columns-2 flex justify-around">
              {editQuestion.type !== "textField" && (
                <div className="w-full p-6">
                  <label className="block mb-2 text-sm font-medium text-black">
                    Options
                  </label>
                  {editQuestion.options.map((opt: string, index: number) => (
                    <div className="columns-2 flex">
                      <label
                        className="block mb-2 text-md font-medium text-black"
                        key={index}
                      >
                        {opt}
                      </label>
                      <div className="pl-10" onClick={() => deleteOption(opt)}>
                        <XCircleIcon className="w-5 text-red-600" />
                      </div>
                    </div>
                  ))}
                  <div className="columns-2 flex">
                    <input
                      type="text"
                      id="option1"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Option1"
                      value={option}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setOption(e.target.value)
                      }
                    />
                    <div className="p-2" onClick={addOptions}>
                      <PlusCircleIcon className="w-6" />
                    </div>
                  </div>
                </div>
              )}
              <div
                className={
                  editQuestion.type !== "textField"
                    ? " items-center justify-center mt-6 w-[300px]"
                    : " items-center justify-center mt-6 w-full  pl-6"
                }
              >
                <label className="block mb-2 text-sm font-medium text-black">
                  Select a type
                </label>
                <select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setEditQuestion({ ...editQuestion, type: e.target.value })
                  }
                  value={editQuestion.type}
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="checkbox">Checkbox</option>
                  <option value="textField">Text field</option>
                  <option value="radioButton">Radio button </option>
                  <option value="selectInput">Select input</option>
                </select>
              </div>
            </div>
            <div className="columns-3 flex items-center space-x-4 justify-end pt-10">
              <button
                onClick={() => {
                  setIsEdit(!isEdit);
                  setEditQuestion(question);
                }}
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#5555ff] rounded-lg hover:bg-[#3c3cbd]   focus:ring-4 focus:outline-none focus:ring-blue-30 font-sans"
              >
                Cancel
              </button>
              <button
                onClick={editQuestionFunction}
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-[#5555ff] rounded-lg hover:bg-[#3c3cbd]   focus:ring-4 focus:outline-none focus:ring-blue-30 font-sans"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ) : (
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
                  <div
                    onClick={() => {
                      setIsEdit(!isEdit);
                      setShow(!show);
                    }}
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100    "
                  >
                    Edit
                  </div>
                </li>
                <li>
                  <div
                    onClick={deleteQuestion}
                    className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100    "
                  >
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
                    id="selectInput"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                        <label className="ml-2 text-md font-medium text-black">
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
                        <label className="ml-2 text-md font-medium text-black">
                          {opt}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <input
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
      )}
    </div>
  );
};
export default QuestionCard;
