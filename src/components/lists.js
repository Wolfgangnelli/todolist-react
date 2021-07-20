import React from "react";
import List from "./list";
import Adlist from "../containers/addnewlist";

export default function lists({ lists, addLists, removeLists }) {
  return (
    <div className="w-2/4 md:w-2/4 mx-auto flex flex-col items-center">
      <h1 className="font-bold text-2xl">LISTS</h1>
      <Adlist />
      <ul className="lists w-full mt-2">
        {lists.map(list => (
          <List key={list.id} list={list} removeLists={removeLists} />
        ))}
      </ul>
    </div>
  );
}
