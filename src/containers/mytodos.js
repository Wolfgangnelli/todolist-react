import React from "react";
import AddNewTodo from "./addnew";
import MyTodolist from "./myTodoList";
import TodoFooter from "./todoFooterContainer";
import ErrorBoundary from "../components/ErrorBoundary";

const parseFilter = (search) => {
  //con -1 dico se non c'è
  if (search.indexOf("filter") === -1) {
    return "";
  }
  //sottoindendo che passo solo un paramentro
  const tokens = search.split("=");
  return tokens[1];
};

export default function mytodos({ match, location }) {
  //console.log(`Paramss--> ${match.params.list}`);
  // alert(location.search);
  //alert(parseFilter(location.search));
  const filterValue = parseFilter(location.search);
  const listid = match.params.list || 1;
  const listName = location.state ? location.state.listName : null;
  const listTitle = listName ? (
    <h3 className="text-2xl font-semibold">{listName}</h3>
  ) : null;
  return (
    <div className="flex flex-col items-center allTodos">
      {listTitle}
      <AddNewTodo list={listid} />
      <ErrorBoundary>
        <MyTodolist filter={filterValue} list={listid} />
      </ErrorBoundary>
      <TodoFooter filter={filterValue} />
    </div>
  );
}
