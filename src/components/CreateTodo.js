import React, { useState } from 'react';

function CreateJob({ addTodo, handleOption, option }) {
  const [todo, setTodo] = useState('');

  function handleAdd() {
    const data = todo;
    setTodo('');
    addTodo(data);
  }

  return (
    <div className='create__wrapper'>
      <div className='create__todo'>
        <input
          type='text'
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <i className='fas fa-plus' onClick={handleAdd}></i>
      </div>
      <select
        name='show-options'
        value={option}
        onChange={(e) => handleOption(e.target.value)}
      >
        <option value='all'>All</option>
        <option value='active'>Active</option>
        <option value='completed'>Completed</option>
      </select>
    </div>
  );
}

export default CreateJob;
