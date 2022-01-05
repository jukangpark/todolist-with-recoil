import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  // 타입 스크립트에게 toDoState는 toDo들의 배열이라는 것을 알려줘야함.
  // 이를 위해 toDOS 가 어떻게 생겼는지 알려줄 인터페이스를 만들어
  // 제네릭에 넣어줘야함.
  key: "toDo",
  default: [],
});
