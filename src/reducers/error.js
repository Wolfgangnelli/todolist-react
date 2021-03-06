import {
  TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_FILTER
} from "../actions/actiontypes";

/**
 * Dato che è il reducerd principale lo chiamo index.js
 */

export default function errorReducer(state = {}, action) {
  switch (action.type) {
    // REJECTED ACTIONS
    case `${TODOS}_REJECTED`:
    case `${ADD_TODO}_REJECTED`:
    case `${SET_FILTER}_REJECTED`:
    case `${REMOVE_TODO}_REJECTED`:
    case `${TOGGLE_TODO}_REJECTED`:
      return {
        hasError: true,
        errorMessage: action.payload.message
      };
    // END REJECTED
    default:
      return state;
  }
}
