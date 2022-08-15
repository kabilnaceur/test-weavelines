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
  setUserAnswers: (value: UserAnswer) => void;
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
