import { DefaultValue, atom, selector } from "recoil";

export const counterState = atom({
  key: "counterState",
  default: 0,
});

export const cmState = atom({
  key: "cmState",
  default: 10,
});

export const cmToInchState = selector({
  key: "cmToInchState",
  get: ({ get }) => {
    const cm = get(cmState);
    return cm / 2.54;
  },
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(cmState);
    } else if (typeof newValue === "number") {
      set(cmState, newValue * 2.54);
    }
  },
});
