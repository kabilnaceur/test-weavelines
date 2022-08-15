import { FC } from "react";
import { useRecoilValue } from "recoil";
import { allFormsState } from "../../recoil/globaleStates";
import { Form } from "../../utils/types";
import FormCard from "./components/formCard";

const HomePage: FC = () => {
    const allForms: Form[] = useRecoilValue(allFormsState);

  return (
    <div className=" flex-col w-full h-screen pt-16 items-center pl-10">
      {allForms.length === 0 ? (
        <div>
          <h1 className="text-3xl text-gray-900">No forms yet</h1>
          <h1 className="text-md text-gray-900">please add one.</h1>
        </div>
      ) : (
        <div className="	columns-3  flex w-full flex-wrap ">
          {allForms.map((form: Form, index: number) => (
            <FormCard key={index} form={form} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};
export default HomePage;
