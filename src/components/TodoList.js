import React from "react";

function TodoList(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleChange(props.id)}
      />
      <p style={props.completed ? completedStyle : null}>{props.text}</p>
    </div>
  );
}

export default TodoList;
