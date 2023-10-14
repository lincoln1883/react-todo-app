import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
      setError('');
    } else {
      setError('Please enter a todo');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input-text"
          type="text"
          id="todo-input"
          value={title}
          onChange={handleChange}
          placeholder="Add Todo..."
        />
        <button className="input-submit" type="submit">
          <FaPlusCircle />
        </button>
      </form>
      <span className="submit-warning">{error}</span>
    </>
  );
};

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoInput;
