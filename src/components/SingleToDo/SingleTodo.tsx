import React from "react";
import "../../components/styles.css";
import { Todo } from "../../types/model";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo: React.FC<SingleTodoProps> = ({
  todo,
  todos,
  setTodos,
}) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todoValue}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <MdDeleteSweep />
        </span>
        <span className="icon">
          <IoMdDoneAll />
        </span>
      </div>
    </form>
  );
};
