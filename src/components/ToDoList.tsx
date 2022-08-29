import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atoms";
import { CreateToDo } from "./CreateToDo";
import { ToDo } from "./ToDo";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
`;

export function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <Container>
      <CreateToDo />
      <h1>Todo</h1>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h1>Doing</h1>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h1>Done</h1>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </Container>
  );
}
