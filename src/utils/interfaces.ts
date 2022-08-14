import { Answer, Form, Question, UserAnswer } from "./types";

export interface AddProps {
  question: Question;
  setQuestion: (value: Question) => void;
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
}
export interface QuestionAnswerCardProps {
  question: Question;
  answers: Answer[];
  setAnswers: (value: Answer[]) => void;
}