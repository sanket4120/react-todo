import React from "react";
import Todo from "./Todo";

function Todos({ todos, setComplete, removeTodo, option, removeCompleted }) {
  let list;
  let lenCompleted = 0;
  switch (option) {
    case "all":
      list = todos;
      break;
    case "completed":
      list = todos.filter((todo) => todo.completed === true);
      lenCompleted = list.length;
      break;
    case "active":
      list = todos.filter((todo) => todo.completed === false);
      break;
    default:
  }

  if (option === "all") {
    list.forEach((todo) => {
      if (todo.completed) {
        lenCompleted += 1;
      }
    });
  }

  return (
    <div className="todos">
      {list.map((todo) => (
        <Todo
          key={todo.key}
          todo={todo}
          setComplete={setComplete}
          removeTodo={removeTodo}
        />
      ))}
      {lenCompleted > 0 && option !== "active" && (
        <div className="remove" onClick={removeCompleted}>
          Clear Completed
        </div>
      )}
    </div>
  );
}

export default Todos;
