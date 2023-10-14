import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todos,
  handleTodoItem,
  handleRemoveTodo,
  editTodo,
}) => (
  <ul>
    {todos.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        handleTodoItem={handleTodoItem}
        handleRemoveTodo={handleRemoveTodo}
        editTodo={editTodo}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  handleTodoItem: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodosList;
