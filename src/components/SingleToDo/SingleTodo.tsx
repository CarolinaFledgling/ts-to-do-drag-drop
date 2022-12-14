import React from "react";
import "../../components/styles.css";
import { Todo } from "../../types/model";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { TodoList } from "../TodoList/TodoList";
import { isDocument } from "@testing-library/user-event/dist/utils";

interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

type NewList = {
  isDone: boolean;
  id: number;
  todoValue: string;
};

export const SingleTodo: React.FC<SingleTodoProps> = ({
  todo,
  todos,
  setTodos,
}) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="todos__single">
      {todo.isDone ? (
        <s className="todos__single--text">{todo.todoValue}</s>
      ) : (
        <span className="todos__single--text">{todo.todoValue}</span>
      )}

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <MdDeleteSweep onClick={() => handleDelete(todo.id)} />
        </span>
        <span className="icon">
          <IoMdDoneAll onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};
