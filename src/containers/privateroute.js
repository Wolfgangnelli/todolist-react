import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserDataContext } from "../containers/logincontext";

/**
 * Funzione che dovrebbe ricevere un componente, con tutte le sue proprietà, per poi ritornare lo stesso componente o un ...
 * Lo inizio ad usare in App.js
 */
export default function Privateroute(props) {
  const [user] = React.useContext(UserDataContext);
  //alert(props.path);
  return user ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{ pathname: "/login", state: { from: props.location.pathname } }}
    />
  );
}
