import React from "react";
import '../../components/styles.css'

export const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="enter task" className="input__box" />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};
