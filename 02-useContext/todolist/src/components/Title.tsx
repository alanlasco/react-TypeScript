import React from "react";
import { useTodos } from "../hooks/useTodos";

export const Title = () => {
  const { pendingTodos } = useTodos();
  return <h1>To do: {pendingTodos}</h1>;
};
