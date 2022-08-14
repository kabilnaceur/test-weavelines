import { FC,useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { allFormsState } from "../../../recoil/globaleStates";
import { FormProps } from "../../../utils/interfaces";
import { Form } from "../../../utils/types";

const FormCard: FC<FormProps> = ({ form, index }) => {
    const navigate = useNavigate();
    const allForms: Form[] = useRecoilValue(allFormsState);
    const setAllForms = useSetRecoilState(allFormsState);
    const [show, setShow] = useState<Boolean>(false);
    const handleChangeShow = (): void => setShow(!show);
    const deleteForm = () => {
        const newForm: Form[] = [...allForms];
        newForm.splice(index, 1);
        setAllForms(newForm)
        setShow(!show);
    }
    const navigateToAnswer = (form:Form): void => {
      navigate("/form", { state:  form });
    }
  return (
    <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mt-5 mr-5">
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
                onClick={deleteForm}
                className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100    "
              >
                Delete
              </div>
            </li>
          </ul>
        </div>
      </div>
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
            Answer
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormCard;
