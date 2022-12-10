import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField/InputField";
import { TodoList } from "./components/TodoList/TodoList";
import { Todo } from "./types/model";

// React.ReactNode - this support all of the types

const App: React.FC = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todoText) {
      setTodos([
        ...todos,
        { id: Date.now(), isDone: false, todoValue: todoText },
      ]);
      setTodoText("")
    }


  };

  console.log(todos);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todoValue={todoText}
        setTodo={setTodoText}
        handleAdd={handleAdd}
      />
      <TodoList todos={todos} setTodos={setTodos}/>

    </div>
  );
};

export default App;
