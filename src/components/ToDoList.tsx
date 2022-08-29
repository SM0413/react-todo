import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import { CreateToDo } from "./CreateToDo";
import { ToDo } from "./ToDo";

export function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}
