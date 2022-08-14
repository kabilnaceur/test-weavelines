import { atom } from "recoil";
import { Form } from "../utils/types";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
const initialAllForms: Form[] = [];

export const allFormsState = atom({
  key: "allFormsState",
  default: initialAllForms,
  effects_UNSTABLE: [persistAtom],
});