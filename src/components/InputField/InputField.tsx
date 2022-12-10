import React, { useRef } from "react";
import "../../components/styles.css";

interface InputFieldProps {
  todoValue: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  todoValue,
  setTodo,
  handleAdd,
}) => {
  // useRef- when we use document.getElement by className,we are hookig that particular component HTML
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        // blur() method removes keyboard focus from the current element
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todoValue}
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
