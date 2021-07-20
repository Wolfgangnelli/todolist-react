import React from "react";
import { Login } from "./login";

export const Singup = (props) => {
  return <Login {...props} singup={true} />;
};
