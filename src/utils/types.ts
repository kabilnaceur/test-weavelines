export type Question = {
  content: string;
  type: string;
  isRequired: boolean;
  options: string[];
};
export type Form = {
  title: string;
  description: string;
  qustions: Question[];
};