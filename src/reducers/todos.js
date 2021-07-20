import {
  TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../actions/actiontypes";

export default function todosReducer(state = [], action) {
  //console.log("state for todos ", state);
  switch (action.type) {
    case `${ADD_TODO}_FULFILLED`:
      return [action.payload.data.result, ...state];
    case `${REMOVE_TODO}_FULFILLED`: {
      //  console.log(action);
      //devo filtrare la lista per rimuovere quel todo solo se la risposta è success
      const success = action.payload.data.success;
      return state.filter(
        (el) => success && el.id !== action.payload.config.id
      );
    }

    case `${TOGGLE_TODO}_FULFILLED`: {
      const result = action.payload.data.result;
      //return [...state, result];
      return state.map((todo) => {
        if (todo.id !== result.id) {
          return todo;
        }
        return result;
      });
    }

    case `${TODOS}_FULFILLED`: {
      //devo catturare la lista che mi sono passato nella payload del getTodos(action creators), sotto config
      const list = +action.payload.config.list;
      //ora i todos sarebbero in
      const todos = action.payload.data.result.data; //data.result.data
      // action.payload.data. qui è fino a dove axios mette il risultato
      const success = action.payload.data.success;
      return todos;
      /*ora il filtro lo sto facendo lato backend, non mi serve piu qui 
        if (!list) {
          return action.payload.data;
        }
        return action.payload.data.filter((todo) => +todo.list === list);
  */
    }
    default:
      return state;
  }
}
