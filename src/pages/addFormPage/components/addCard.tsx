import { FC, ChangeEvent, useState } from "react";
import { AddProps } from "../../../utils/interfaces";
import { PlusCircleIcon ,XCircleIcon} from "@heroicons/react/outline";
import { Question } from "../../../utils/types";
/* A functional component that takes in a question and a setQuestion function as props. It also has a
state called option which is a string. It has two functions addOptions and deleteOption. The
addOptions function adds an option to the question. The deleteOption function deletes an option from
the question. */

const AddCard: FC<AddProps> = ({ question, setQuestion }) => {
  const [option, setOption] = useState<string>("option");
  const addOptions = (): void => {
    setQuestion({ ...question, options: [...question.options, option] });
    setOption("option");
  };
  const deleteOption = (option:string): void => {
    const newOptions: string[] = [...question.options]
        const index: number = newOptions.findIndex(
          (o: string) => o === option
        );
    newOptions.splice(index, 1);
    const newQuestion: Question = { ...question, options: newOptions }
    setQuestion(newQuestion)

  }
  return (
    <div>
      <div className=" p-6 bg-white rounded-xl shadow-lg items-center space-x-4 mb-5">
        <div className="grid">
          <div className="md:columns-2 flex justify-around">
            <div className="w-full p-6">
              <label className="block mb-2 text-sm font-medium text-black font-sans">
                Question
              </label>
              <input
                type="text"
                value={question.content}
                id="question"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-sans"
                placeholder="Question"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setQuestion({ ...question, content: e.target.value })
                }
              />
            </div>
            <div className="flex items-center justify-center mt-5">
              <input
                checked={question.isRequired}
                onChange={() =>
                  setQuestion({ ...question, isRequired: !question.isRequired })
                }
                id="checked-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-50 dark:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
              />
              <label className="ml-2 text-sm font-medium text-black font-sans">
                Require
              </label>
            </div>
          </div>
          <div className="md:columns-2 flex justify-around">
            {question.type !== "textField" && (
              <div className="w-full p-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Options
                </label>
                {question.options.map((opt: string, index: number) => (
                  <div className="columns-2 flex">
                    <label
                      className="block mb-2 text-md font-medium text-black font-sans"
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
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-sans"
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
                question.type !== "textField"
                  ? " items-center justify-center mt-6 w-[300px]"
                  : " items-center justify-center mt-6 w-full  pl-6"
              }
            >
              <label className="block mb-2 text-sm font-medium text-black">
                Select a type
              </label>
              <select
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setQuestion({ ...question, type: e.target.value })
                }
                value={question.type}
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
        </div>
      </div>
    </div>
  );
};
export default AddCard;
