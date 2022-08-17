import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { IndexInfo } from "typescript";
import { Form, Question, UserAnswer } from "./types";

export interface AddProps {
  question: Question;
  setQuestion: (value: Question) => void;
}
export interface EditProps {
  question: Question;
  setQuestion: (value: Question) => void;
  formDetails: Form;
  setFormDetails: (value: Form) => void;
}
export interface FormInformationsProps {
  formDetails: Form;
  setFormDetails: (value: Form) => void;
}
export interface FormAnswerInformationsProps {
  formDetails: Form;
  userAnswers: UserAnswer;
  userEmailError: boolean;
  setUserAnswers: (value: UserAnswer) => void;
  register: UseFormRegister<UserAnswer>;
  errors: FieldErrorsImpl<UserAnswer>;
}
export interface QuestionCardProps {
  question: Question;
  formDetails: Form;
  setFormDetails: (value: Form) => void;
    index: number;
    
}
export interface QuestionAnswerCardProps {
  question: Question;
  userAnswers: UserAnswer;
  setUserAnswers: (value: UserAnswer) => void;
    register: UseFormRegister<UserAnswer>;
    index : number;
}
export interface AnswerProps {
  answer: UserAnswer;
  index: number;
  form: Form;
  setAllAnswers: (value: UserAnswer[]) => void;
  allAnswers: UserAnswer[];
}
export interface FormProps {
  form: Form;
  index: number;
}
