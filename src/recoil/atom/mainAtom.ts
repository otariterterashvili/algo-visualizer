import { atom } from "recoil";
import { unsorted } from "../../helper";

export const mainState = atom({
  key: "mainState",
  default: {
    arr: unsorted,
    minIndex: 0,
    pivot: 0,
    iterIndex: 0
  }
})

// export const pivotState = atom({
//   key: "pivotState",
//   default: {
//     minIndex: 0,
//     pivot: 0,
//   }
// })