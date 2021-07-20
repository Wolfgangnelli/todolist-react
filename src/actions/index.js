import axios from "axios";
import { APIURL, APIFILTERURL } from "../config/config";
import {
  TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_FILTER,
} from "./actiontypes";

/**
 * Lo chiamo index perchè ho solo questo al momento
 */
// questa funzione che chiameremo passandogli un parametro è un React-redux ACTION CREATORS
// perchè crea un azione, ritornano un azione

//come faccio a passare questo ACTION CREATORS getTOdos??? Usando il mapStateToProps nei containers o meglio passando
//direttamente mapActionToProps (cioè l'action come secondo param)
export const getTodos = (list = 1, filter = "ALL") => {
  return {
    type: TODOS,
    //payload è dove passerò la promise
    payload: axios.get(APIURL, {
      params: {
        list_id: list,
        filter,
      },
    }),
  };
};

export const addTodo = (todo, list = 0) => {
  console.log(`ACTION CREATORS--> ${todo}`);
  //una volta finita l'action ADD_TODOS, la promise emetterà questa azione ADD_TODO_FULFILLED (ed è questo
  // che devo andare ad ascoltare nel riducer, non più l'ADD_TODO(che invece è quello che intercetterà la promise))
  return {
    type: ADD_TODO,
    payload: axios.post(APIURL, {
      //questa (nelle parentesi) è la payload che vado a lanciare/passare nel server come config
      //text: todo,
      todo: todo,
      completed: false,
      list_id: +list,
    }),
  };
};

export const removeTodo = (i) => {
  console.log(`ACTION CREATORS--> ${i}`);
  return {
    //questo REMOVE_TODO sarà qll che verrà catturato dal nostro middleware della promise e vedendo che la payload è una promise
    // allora gestirà questa REMOVE_TODO, devo quindi gestire REMOVE_TODO_FULFILLED nel reducers.
    type: REMOVE_TODO,
    payload: axios.delete(APIURL + "/" + i, { id: i }),
    // id: i
  };
};

export const toggleTodo = (todo, value) => {
  console.log(`ACTION CREATORS--> ${todo.id}`);
  return {
    type: TOGGLE_TODO,
    payload: axios.patch(APIURL + "/" + todo.id, {
      ...todo,
      completed: value,
    }),
    //id: i
  };
};

export const filterTodo = (filter = "ALL") => {
  return {
    type: SET_FILTER,
    payload: axios.post(APIFILTERURL, {
      filter,
    }),
    //activeFilter: filter
  };
};

//Quando lo store farà la dispatch di set_filter, il reducer dovrà fare qualcosa
