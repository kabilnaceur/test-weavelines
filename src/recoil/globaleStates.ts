import { atom } from "recoil";
import { Form } from "../utils/types";
const initialForm: Form = {
  title: "Form title",
  description: "",
  qustions: [],
};
export const formState = atom({
  key: "formState",
  default: initialForm,
});
