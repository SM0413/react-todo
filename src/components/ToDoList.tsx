import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import { CreateToDo } from "./CreateToDo";
import { ToDo } from "./ToDo";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
`;

export function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <Container>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </Container>
  );
}
