export type Question = {
  content: string;
  type: string;
  isRequired: boolean;
  options: string[];
};
export type Form = {
  title: string;
  description: string;
  questions: Question[];
};
export type Answer = {
  question: string;
  answer: string;
};
export type UserAnswer = {
  userEmail: string;
  answers: Answer[];
};