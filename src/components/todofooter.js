import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function todofooter({
  match,
  filter,
  dispatch,
  filterTodo,
  activeFilter,
}) {
  console.log(`Dispatch--> ${dispatch}`);
  const todoUrl = match.url;
  console.log("filter= " + filter);
  const all =
    filter === "ALL" ? (
      <li className="active font-semibold mx-1">{filter}</li>
    ) : (
      <li className="font-semibold hover:text-blue-700 mx-1">
        {" "}
        <NavLink to={todoUrl + "?filter=ALL"}>ALL</NavLink>
      </li>
    );
  const todo =
    filter === "TODO" ? (
      <li className="active font-semibold mx-1">{filter}</li>
    ) : (
      <li className="font-semibold hover:text-blue-700 mx-1">
        {" "}
        <NavLink to={todoUrl + "?filter=TODO"}>TODO</NavLink>
      </li>
    );
  const completed =
    filter === "COMPLETED" ? (
      <li className="active font-semibold mx-1">{filter}</li>
    ) : (
      <li className="font-semibold hover:text-blue-700 mx-1">
        {" "}
        <NavLink to={todoUrl + "?filter=COMPLETED"}>COMPLETED</NavLink>
      </li>
    );
  return (
    <div className="footer w-4/5 rounded-full">
      <ul className="flex flex-wrap w-3/4 justify-around mx-auto">
        {all}
        {todo}
        {completed}
      </ul>
    </div>
  );
}

todofooter.propTypes = {
  dispatch: PropTypes.func,
  filterTodo: PropTypes.func.isRequired,
  activeFilter: PropTypes.string,
};
