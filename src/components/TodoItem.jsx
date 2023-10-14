import React, { useRef, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';

const TodoItem = ({
  item, handleTodoItem, handleRemoveTodo, editTodo,
}) => {
  const [editing, setEditing] = useState(false);
  const ref = useRef(null);

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      editTodo(ref.current.value, item.id);
      setEditing(false);
    }
  };
  return (
    <li className="item">
      <div className="content" style={viewMode}>
        <input
          type="checkbox"
          name=""
          id=""
          checked={item.completed}
          onChange={() => handleTodoItem(item.id)}
        />
        <span style={item.completed ? completedStyle : null}>{item.title}</span>
        <button type="button" onClick={handleEditing}>
          <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <button type="button" onClick={() => handleRemoveTodo(item.id)}>
          <FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
      </div>
      <input
        type="text"
        ref={ref}
        style={editMode}
        className="textInput"
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleTodoItem: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoItem;
