import { selector } from "recoil";
import { mainState } from "../atom";

export const sortArrayState = selector({
  key: "sortArrayState",
  get: ({get}) =>{
    const list = get(mainState);

    return list
  }
})