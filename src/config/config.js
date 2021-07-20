const LARAVEL_API = "https://warm-cliffs-88201.herokuapp.com/";
//const LARAVEL_API = "http://mytodolist.test/";
/*
export const APIURL = "http://localhost:8000/todos";
export const APIFILTERURL = "http://localhost:8000/activeFilter";
export const LISTSURL = "http://localhost:8000/lists";
*/
export const APIURL = LARAVEL_API + "todos";
export const APIFILTERURL = LARAVEL_API + "activeFilter"; //questo sarà un endpoint che lo ritornerà il todolist controller
export const LISTSURL = LARAVEL_API + "todolists";

export const AUTH_URL = LARAVEL_API + "api/auth/";
