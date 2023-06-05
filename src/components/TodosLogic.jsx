import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TodoInput from './TodoInput';
import TodosList from './TodosList';

const getInitialTodos = () => {
  const temp = localStorage.getItem('todos');
  const loadedTodos = JSON.parse(temp);
  return loadedTodos || [];
};

const TodosLogic = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleTodoItem = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (updatedTitle, id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const updateTitle = updatedTitle;
        return { ...todo, title: updateTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <TodosList
        todos={todos}
        editTodo={editTodo}
        handleTodoItem={handleTodoItem}
        handleRemoveTodo={handleRemoveTodo}
      />
    </>
  );
};

TodoInput.propTypes = {
  editTodo: PropTypes.func.isRequired,
  handleTodoItem: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TodosLogic;
