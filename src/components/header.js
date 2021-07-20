import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserDataContext } from "../containers/logincontext";

export default function Header() {
  //catturo l'utente, che nel caso sia loggato nascondo il login e singup
  //const user = Auth.getUser();
  const [user] = useContext(UserDataContext);

  return (
    <>
      <header className="App-header flex flex-wrap justify-evenly">
        <h1 className="text-2xl font-bold">
          <NavLink exact activeStyle={{ color: "green" }} to="/">
            TODO LIST
          </NavLink>
        </h1>
        <nav className="p-1 mt-2">
          <ul className="menu flex justify-between">
            {user ? (
              <>
                <li className="px-2">
                  <NavLink
                    activeClassName="active"
                    to="/lists"
                    className="font-semibold hover:text-blue-700"
                  >
                    LISTS
                  </NavLink>
                </li>
                <li className="px-2">
                  <NavLink
                    activeClassName="active"
                    to="/todos"
                    className="font-semibold hover:text-blue-700"
                  >
                    ALL TODOS
                  </NavLink>
                </li>{" "}
              </>
            ) : null}
            {user ? (
              <>
                <li className="px-2">
                  <NavLink
                    to="/logout"
                    className="font-semibold hover:text-blue-700"
                  >
                    LOGOUT
                  </NavLink>
                </li>
                <span className="text-blue-600 pl-5">
                  <i className="fas fa-user-check text-green-500"></i>
                  {user.name}
                </span>
              </>
            ) : (
              <>
                <li className="px-2">
                  <NavLink
                    activeClassName="active"
                    to="/singup"
                    className="font-semibold hover:text-blue-700"
                  >
                    SINGUP
                  </NavLink>
                </li>
                <li className="px-2">
                  <NavLink
                    activeClassName="active"
                    to="/login"
                    className="font-semibold hover:text-blue-700"
                  >
                    LOGIN
                  </NavLink>
                </li>{" "}
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
