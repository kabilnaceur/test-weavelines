import { FC } from "react";
import { FormAnswerInformationsProps } from "../../../utils/interfaces";

/* It's a function component that take props from FormAnswerInformationsProps interface and return a
card with title and description form and an input to add email user. */
const FormInformations: FC<FormAnswerInformationsProps> = ({
  formDetails,
  errors,
  register
}) => {
  return (
    <div>
      <div className=" p-6 bg-white rounded-xl shadow-lg items-center space-x-4 mb-5">
        <div className="grid">
          <div className="flex justify-around">
            <div className="w-full p-6">
              <h1 className="text-3xl text-black">{formDetails.title}</h1>
              <h1 className="text-sm text-black">{formDetails.description}</h1>
              <h1 className="text-sm text-black pt-6">
                Hello , here my form to answer to it you should tap your email
                and to validate your form you should answer to require
                questions.
                <br />
                Thank you.
              </h1>
              {errors?.userEmail ? (
                <label className="block text-sm font-medium text-red-600 mt-5">
                  Your email isn't valide
                </label>
              ) : null}
              <label className="block mb-2 text-sm font-medium text-black pt-6">
                Email *
              </label>
              <input
                {...register("userEmail", {
                  required: true,
                })}
                type="text"
                id="Email"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormInformations;
