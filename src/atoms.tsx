import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

export const toDoState = atom<IToDo[]>({
  // 타입 스크립트에게 toDoState는 toDo들의 배열이라는 것을 알려줘야함.
  // 이를 위해 toDOS 가 어떻게 생겼는지 알려줄 인터페이스를 만들어
  // 제네릭에 넣어줘야함.
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
    /* if (category === "TO_DO")
      return toDos.filter((toDo) => toDo.category === "TO_DO");
    if (category === "DOING")
      return toDos.filter((toDo) => toDo.category === "DOING");
    if (category === "DONE")
      return toDos.filter((toDo) => toDo.category === "DONE"); */
  },
});

/* export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
}); */

// Selector 는 atoms나 다른 selector를 입력으로 받아들이는 pure function이다.
// 상위의 atoms 또는 selectors 가 업데이트되면
// 하위의 selector 함수도 다시 실행된다.
// 컴포넌트들은 selectors를 atoms 처럼 구독할 수 있으며
// selectors 가 변경되면 컴포넌트들도 다시 렌더링 된다.

// Selectors는 상태를 기반으로 하는 파생 데이터를 계산하는데 사용된다.
// 최소한의 상태 집합만 atoms에 저장하고 다른 모든 파생되는
// 데이터는 selectors에 명시한 함수를 통해 효율적으로 계산함으로써 쓸모 없는 상태의 보존을 방지한다.
// Selectors는 어떤 컴포넌트가 자신을 필요로 하는지, 또 자신은 어떤 상태에 의존하는지를
// 추적하기 때문에 이러한 함수적인 접근 방식을 매우 효율적으로 만든다.

// 컴포넌트의 관점에서 보면 selectors와 atoms는 동일한 인터페이스를 가지므로
// 서로 대체할 수 있다.

// get 속성은 계산될 함수다.
// 전달되는 get 인자를 통해 atoms와 다른 selectors에 접근할 수 있다.
// 다른 atom나 selectors에 접근하면 자동으로 종속 관계가 생성되므로,
// 참조했던 다른 atoms나 selectors가 업데이트 되면 이 함수도 다시 실행된다.

// 이 fontSizeLabelState 예시에서 selector는 fontSizeState라는 하나의 atom에 의존성을 갖는다.
// 개념적으로 fontSizeLabelState selector는 fontSizeState를 입력으로 사용하고
// 형식화된 글꼴 크기 레이블을 출력으로 반환하는 순수 함수처럼 동작한다.

// Selectors는
