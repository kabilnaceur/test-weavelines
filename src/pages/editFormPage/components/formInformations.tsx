import { FC, ChangeEvent } from "react";
import { FormInformationsProps } from "../../../utils/interfaces";

/**
 * It's a function component to edit form informations : title and description
 * @param  - FC <FormInformationsProps>
 * @returns A div with a div inside of it.
 */
const FormInformations: FC <FormInformationsProps> = ({formDetails,setFormDetails}) => {
  return (
    <div>
      <div className=" p-6 bg-white rounded-xl shadow-lg items-center space-x-4 mb-5">
        <div className="grid">
          <div className="flex justify-around">
            <div className="w-full p-6">
              <h1 className="text-3xl text-black">Form Title</h1>
              <input
                value={formDetails.title}
                type="text"
                id="formTitle"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Form title"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormDetails({ ...formDetails, title: e.target.value })
                }
              />
              <label className="block mb-2 text-sm font-medium text-black pt-6">
                Description
              </label>
              <input
                value={formDetails.description}
                type="text"
                id="description"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-[80px]"
                placeholder="Description"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormDetails({
                    ...formDetails,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormInformations;
