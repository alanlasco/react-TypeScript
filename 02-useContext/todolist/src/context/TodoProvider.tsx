//provedor permite compartir informacion en componentes hijos

import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { todoState } from "../interfaces/interfaces";
import { todoReducer } from "./TodoReducer";

const INITIAL_STATE: todoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      desc: "recolectar papeles",
      completed: false,
    },
    {
      id: "2",
      desc: "recolectar pipas",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  const toggleTodo = (id: string) => {
    dispatch({ type: "toggleTodo", payload: { id } });
  };

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {/*higher order component aca dentro iran los componentes que utilizar el value(los hijos que van a ser renderizados) */}
      {children}
    </TodoContext.Provider>
  );
};
