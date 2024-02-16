//para la lista de tareas
export interface Todo {
  id: string;
  desc: string;
  completed: boolean;
}

export interface todoState {
  todoCount: number;
  todos: Todo[];
  completed: number;
  pending: number;
}
