import { FC } from "react";
import { useRecoilValue } from "recoil";
import { formState } from "../../recoil/globaleStates";
import { Form } from "../../utils/types";
const FormPage: FC = () => {
  const formDetails: Form = useRecoilValue(formState);
  console.log("question", formDetails);

  return <div></div>;
};
export default FormPage;
