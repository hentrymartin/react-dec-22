import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './../images/remove.svg';
import Avatar from './Avatar';
import TaskListItem from './TaskListItem';
import './TaskList.css';
import EachColumn from './EachColumn';

const TaskList = props => {
  const { onStatusChange, onRemoveTask, tasks } = props;
  return (
    <div className="task-list-wrapper">
      <div className="task-list-wrapper__todo-items">
        <EachColumn
          tasks={tasks}
          statusToBeDisplayed="TODO"
          onStatusChange={onStatusChange}
          onRemoveTask={onRemoveTask}
        />
      </div>

      <div className="task-list-wrapper__progress-items">
        <EachColumn
          tasks={tasks}
          statusToBeDisplayed="IN_PROGRESS"
          onStatusChange={onStatusChange}
          onRemoveTask={onRemoveTask}
        />
      </div>

      <div className="task-list-wrapper__completed-items">
        <EachColumn
          tasks={tasks}
          statusToBeDisplayed="COMPLETED"
          onStatusChange={onStatusChange}
          onRemoveTask={onRemoveTask}
        />
      </div>
    </div>
  );
};

TaskList.defaultProps = {
  tasks: [],
  onRemoveTask: () => {},
  onStatusChange: () => {},
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  onRemoveTask: PropTypes.func,
  onStatusChange: PropTypes.func,
};

export default TaskList;
