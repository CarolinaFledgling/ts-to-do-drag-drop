import React from "react";
import "../../components/styles.css";
import { Todo } from "../../types/model";
import { SingleTodo } from "../SingleToDo/SingleTodo";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};
