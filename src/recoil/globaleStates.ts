import { atom } from "recoil";
import { Form } from "../utils/types";
import { recoilPersist } from "recoil-persist";

/* A function that is used to persist the state. */
const { persistAtom } = recoilPersist();

/* Creating an empty array of type Form is na initial value for a recoil state. */
const initialAllForms: Form[] = [];

/* Creating a state that will be used to store all the forms. */
export const allFormsState = atom({
  key: "allFormsState",
  default: initialAllForms,
  effects_UNSTABLE: [persistAtom],
});