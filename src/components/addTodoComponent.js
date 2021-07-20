import React from "react";
import PropTypes from "prop-types";

export default function addTodoComponent({ addTodo, list }) {
  let todoInput;
  return (
    <div className="flex">
      <input
        onKeyUp={e => {
          if (+e.keyCode === 13) {
            addTodo(todoInput.value, list);
            todoInput.value = "";
          }
        }}
        ref={node => {
          todoInput = node;
        }}
        className="mt-2 border border-black"
      />
      <button
        onClick={() => {
          addTodo(todoInput.value, list);
          todoInput.value = "";
        }}
        className="ml-2 mt-1 p-2 bg-blue-500 hover:bg-green-600 rounded focus:outline-none shadow-xl"
      >
        Add
      </button>
    </div>
  );
}

addTodoComponent.propTypes = {
  addTodo: PropTypes.func.isRequired
};

// keyCode === '13' (13 è INVIO)
// il + davanti a e.keyCode è per castare il valore a number
