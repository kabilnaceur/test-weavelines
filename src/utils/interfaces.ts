import { Form, Question } from "./types";

export interface AddProps {
    question: Question;
    setQuestion : (value: Question) => void
}
export interface FormInformationsProps {
    formDetails: Form;
    setFormDetails: (value: Form) => void
}
export interface QuestionCardProps {
    question: Question;
}