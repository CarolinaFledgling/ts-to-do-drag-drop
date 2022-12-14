import React, { useState } from "react";
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
  // Editing functionality with two states. First one will keep the track if the Edit Mode is on or not.
  const [isEdit, setIsEdit] = useState<boolean>(false);
  // Second one will keep the value of editing input.
  const [editTodo, setEditTodo] = useState<string>(todo.todoValue);

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

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todoValue: editTodo } : todo))
    );

    setIsEdit(false);
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {isEdit ? (
        <input
          className="todos-single--text"
          value={editTodo}
          onChange={(e) => {
            setEditTodo(e.target.value);
          }}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todoValue}</s>
      ) : (
        <span className="todos__single--text">{todo.todoValue}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!isEdit && !todo.isDone) {
              setIsEdit(!isEdit);
            }
          }}
        >
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
