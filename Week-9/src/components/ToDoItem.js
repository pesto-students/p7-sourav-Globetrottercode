import React from "react";

function ToDoItem(props) {
  return (
    <>
      <li>
        {props.text}{" "}
        <button
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          <span id="delete"> Delete</span>
        </button>
      </li>
    </>
  );
}

export default ToDoItem;
