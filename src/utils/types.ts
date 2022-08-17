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
  answers: UserAnswer[];
};
export type Answer = {
  question: string;
  answer: string;
  isRequired: boolean;
};
export type UserAnswer = {
  userEmail: string;
  answers: Answer[];
};
