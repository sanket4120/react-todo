import React from "react";

function Todo({ todo, setComplete, removeTodo }) {
  return (
    <div className="todo" key={todo.key}>
      <i
        className="far fa-check-circle"
        style={{ color: todo.completed ? "#4e8d7c" : "#e6e6e6" }}
        onClick={() => setComplete(todo.key)}
      ></i>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.todo}
      </span>
      <i className="far fa-trash-alt" onClick={() => removeTodo(todo.key)}></i>
    </div>
  );
}

export default Todo;
