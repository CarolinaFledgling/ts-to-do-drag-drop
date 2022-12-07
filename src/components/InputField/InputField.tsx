import React from "react";
import "../../components/styles.css";

interface InputFieldProps {
  todoText: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export const InputField: React.FC<InputFieldProps> = ({
  todoText,
  setTodo,
}) => {
  return (
    <form className="input">
      <input
        value={todoText}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="enter task"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};
