import { IToDo, toDoState } from "../atoms";
import styled from "styled-components";
import React from "react";
import { useSetRecoilState } from "recoil";

const ToDoList = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 10px;
  border-radius: 25px;
  max-width: 300px;
  span {
    margin-right: 10px;
  }
  button {
    margin-right: 10px;
  }
`;

export function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldTodos[targetIndex];
      const newToDo = { text, id, category: name };
      console.log(oldToDo, newToDo);
      return oldTodos;
    });
  };

  return (
    <ToDoList>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          ToDo
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </ToDoList>
  );
}
