import axios from "axios";
import { LISTSURL } from "../config/config";
import { LISTS, ADD_LIST, REMOVE_LIST } from "./actiontypes";

export const getLists = () => {
  return {
    type: LISTS,
    payload: axios.get(LISTSURL),
  };
};
export const addLists = (name) => {
  console.log(`ACTION CREATORS--> ${name}`);

  return {
    type: ADD_LIST,
    payload: axios.post(LISTSURL, {
      name,
    }),
  };
};

export const removeLists = (i) => {
  console.log(`ACTION CREATORS--> ${i}`);
  return {
    type: REMOVE_LIST,
    payload: axios.delete(LISTSURL + "/" + i, { id: i }),
  };
};
