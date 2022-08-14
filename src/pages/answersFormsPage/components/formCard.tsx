import { FC } from "react";
import { useNavigate } from "react-router";
import { FormProps } from "../../../utils/interfaces";
import { Form } from "../../../utils/types";

const FormCard: FC<FormProps> = ({ form }) => {
    const navigate = useNavigate();
    const navigateToAnswer = (form:Form): void => {
      navigate("/answer", { state:  form.answers });
    }
  return (
    <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mt-5 mr-5">
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">
          {form.title}
        </h5>
        <span className="text-sm text-gray-500 ">{form.description}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <div
            onClick={() => {navigateToAnswer(form)}}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-30"
          >
            Show answers
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormCard;