import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';
import './styles.css';

export default function App() {
  let localTodos = [];
  let localStorage = window.localStorage;
  if (localStorage.localTodos) {
    localTodos = JSON.parse(localStorage.getItem('localTodos'));
  } else {
    localStorage.setItem('localTodos', JSON.stringify(localTodos));
  }

  const [todos, setTodos] = useState([...localTodos]);
  const [option, setOption] = useState('all');

  useEffect(() => {
    localStorage.setItem('localTodos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    const copyTodo = [...todos];
    const newTodo = {
      key: uuid(),
      todo: todo,
      completed: false,
    };
    copyTodo.push(newTodo);
    setTodos(copyTodo);
  }

  function setComplete(key) {
    const copyTodo = [...todos];
    const index = copyTodo.findIndex((todo) => todo.key === key);
    const completed = copyTodo[index].completed;
    copyTodo[index] = { ...copyTodo[index], completed: !completed };
    setTodos(copyTodo);
  }

  function removeTodo(key) {
    const copyTodo = [...todos];
    const newTodo = copyTodo.filter((item) => item.key !== key);
    setTodos(newTodo);
  }

  function removeCompleted() {
    const copyTodo = [...todos];
    const newTodo = copyTodo.filter((item) => item.completed === false);
    setTodos(newTodo);
  }

  function handleOption(value) {
    setOption(value);
  }

  return (
    <div className='App'>
      <div className='top__section'></div>
      <div className='container'>
        <Header />
        <CreateTodo
          addTodo={addTodo}
          handleOption={handleOption}
          option={option}
        />

        <Todos
          todos={todos}
          setComplete={setComplete}
          removeTodo={removeTodo}
          option={option}
          removeCompleted={removeCompleted}
        />
      </div>
    </div>
  );
}
