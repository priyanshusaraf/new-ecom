import { atom } from "recoil";

export const productsAtom = atom({
  key: "productsAtom",
  default: [],
});

export const userAtom = atom({
  key: "userAtom",
  default: {
    isAuth: false,
    user: null,
  },
});
