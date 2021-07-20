import React from "react";
import { Link } from "react-router-dom";

export default function list({ list, removeLists }) {
  return (
    <>
      <li
        key={list.id}
        className="font-semibold bg-blue-500 w-full my-1 rounded hover:bg-blue-700 shadow-l p-1"
      >
        {/* <Link to={`/lists/${list.id}/todos`}>{list.name}</Link> */}
        <Link
          to={{
            pathname: `/lists/${list.id}/todos`,
            state: {
              listName: list.name
            }
          }}
        >
          {list.name}
        </Link>
        <span
          className="cross cursor-pointer"
          onClick={e => {
            e.stopPropagation();
            removeLists(list.id);
          }}
        ></span>
      </li>
    </>
  );
}

// Come posso catturare questo listName?
// Vado nel container mytodos e devo catturare la location !!
