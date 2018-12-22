import React from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';

const TaskList = props => {
  return (
    <div className="task-list-wrapper">
      {props.tasks.map(task => (
        <div className="task-list-wrapper__item">{task}</div>
      ))}
    </div>
  );
};

TaskList.defaultProps = {
  tasks: [],
};

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
