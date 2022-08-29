import { IToDo } from "../atoms";

export function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>ToDo</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
}
