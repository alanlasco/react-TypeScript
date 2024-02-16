import { createContext } from "react";
import { todoState } from "../interfaces/interfaces";

export type TodoContextProps = {
  todoState: todoState;
  toggleTodo: (id: string) => void;
};

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
