import { atom } from "recoil";
import { Form, UserAnswer } from "../utils/types";
const initialForm: Form = {
  title: "Form title",
  description: "",
  questions: [],
};
const initialUserAnswers: UserAnswer = {
  userEmail: "",
  answers: [],
};
export const formState = atom({
  key: "formState",
  default: initialForm,
});
export const userAnswersState = atom({
  key: "userAnswersState",
  default: initialUserAnswers,
});