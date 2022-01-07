import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";
/* [
  {
      "text": "5",
      "id": 1641446429052,
      "category": "TO_DO"
  },
  {
      "text": "4",
      "id": 1641446428851,
      "category": "TO_DO"
  },
  {
      "text": "3",
      "id": 1641446428673,
      "category": "TO_DO"
  },
  {
      "text": "2",
      "id": 1641446428468,
      "category": "TO_DO"
  },
  {
      "text": "1",
      "id": 1641446428204,
      "category": "TO_DO"
  }
] */

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      console.log(oldToDo, newToDo);
      console.log(targetIndex);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li style={{ marginLeft: "10px" }}>
      <span>{text}</span>

      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
