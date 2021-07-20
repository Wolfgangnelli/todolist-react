import React from "react";
import PropTypes from "prop-types";

export default function todo({ todoItem, toggleTodo, id, removeTodo }) {
  return (
    <li
      className={
        todoItem.completed
          ? "completed bg-blue-500 w-full my-1 rounded hover:bg-blue-700 shadow-lg"
          : "bg-blue-500 w-full my-1 rounded hover:bg-blue-700 shadow-lg"
      }
    >
      <span
        onClick={() => toggleTodo(todoItem, !todoItem.completed)}
        className={
          todoItem.completed
            ? "completed cursor-pointer"
            : "uncompleted cursor-pointer"
        }
      ></span>
      {todoItem.todo}
      <span
        className="cross cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(id);
        }}
      ></span>
    </li>
  );
}
// TYPECHECKING
// Definisco un oggetto delle proprietà che todo riceve
todo.propTypes = {
  todoItem: PropTypes.shape({
    completed: PropTypes.number,
    todo: PropTypes.string,
    id: PropTypes.number,
  }),
  toggleTodo: PropTypes.func.isRequired,
  id: PropTypes.number,
  removeTodo: PropTypes.func.isRequired,
};
