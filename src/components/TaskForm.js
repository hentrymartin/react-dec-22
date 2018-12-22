import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import './TaskForm.css';

const TaskForm = ({ isError, taskName, onTaskTextChange, onResetAll, onResetText, onInputLoaded, onAddTask }) => {
  return (
    <div className="task-form-wrapper">
      <Input value={taskName} onChange={onTaskTextChange} isError={isError} onInputLoaded={onInputLoaded} />
      <Button label="Reset Text" onClick={onResetText} theme="orange" />
      <Button label="Add Me" onClick={onAddTask} theme="green" />
      <Button label="Reset All" onClick={onResetAll} theme="red" />
    </div>
  );
};

TaskForm.defaultProps = {
  taskName: '',
  onTaskTextChange: () => {},
  onResetText: () => {},
  onAddTask: () => {},
  onResetAll: () => {},
  onInputLoaded: () => {},
  isError: false,
};

TaskForm.defaultProps = {
  taskName: PropTypes.string,
  onTaskTextChange: PropTypes.func,
  onResetText: PropTypes.func,
  onAddTask: PropTypes.func,
  onResetAll: PropTypes.func,
  onInputLoaded: PropTypes.func,
  isError: PropTypes.bool,
};

export default TaskForm;
