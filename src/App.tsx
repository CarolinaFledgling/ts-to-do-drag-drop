import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField/InputField";
import { Todo } from "./types/model";

// React.ReactNode - this support all of the types

const App: React.FC = () => {
  const [todoText, setTodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);

  console.log(todoText);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todoText={todoText} setTodo={setTodo} />
    </div>
  );
};

export default App;
