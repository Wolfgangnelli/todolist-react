import todos from "./todos";
import setFilter from "./setfilter";
import error from "./error";
import lists from "./lists";

import { combineReducers } from "redux";

//devo dire per ogni parte del mio stato quale sarà il reducer
/*
export default combineReducers({ todos: todos, setFilter: setFilter, error: error, lists: lists});
*/

export default combineReducers({ todos, setFilter, error, lists });
// un reducer per ogni chiave della store
