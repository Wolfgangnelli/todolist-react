import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { applyMiddleware, createStore, compose } from "redux";
import storeReducer from "./reducers/index";
import { Provider } from "react-redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import { BrowserRouter } from "react-router-dom";

let storeTodos = {
  todos: [],
  setFilter: "",
  error: {
    hasError: "",
    errorMessage: "",
  },
};

if (localStorage.getItem("myTodoList")) {
  const currState = JSON.parse(localStorage.getItem("myTodoList"));
  if (currState && !currState.error.hasError) {
    storeTodos = currState;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  storeReducer,
  { ...storeTodos },
  composeEnhancers(applyMiddleware(logger, promise))
);

store.subscribe(() => {
  const state = store.getState();
  if (!state.error.hasError) {
    const currState = JSON.stringify(state);
    localStorage.setItem("myTodoList", currState); //("chiave", valore)
  }
});
// BrowserRouter lo metto dentro al Provider perchè cosi posso accedere alla store attraverso le rotte
// Route, se vedi una rotta o una path del browser che abbia questo percorso "/", renderizzami quel componente
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
