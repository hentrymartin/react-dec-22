import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './../images/remove.svg';
import Avatar from './Avatar';
import Button from './Button';

const TaskListItem = ({ task, index, onRemoveTask, onStatusChange }) => {
  const getLabel = () => {
    switch (task.status) {
      case 'TODO':
        return 'Move to In-Progress';
      default:
        return 'Move to Completed';
    }
  };

  return (
    <div className="task-list-wrapper__item">
      {task.name}
      <Avatar src={CloseIcon} alt="remove item" onClick={onRemoveTask.bind(this, index)} />
      {task.status !== 'COMPLETED' && <Button label={getLabel()} onClick={onStatusChange.bind(this, task, index)} />}
    </div>
  );
};

TaskListItem.defaultProps = {
  task: {},
  index: 0,
  onRemoveTask: () => {},
  onStatusChange: () => {},
};

TaskListItem.propTypes = {
  task: PropTypes.object,
  index: PropTypes.number,
  onRemoveTask: PropTypes.func,
  onStatusChange: PropTypes.func,
};

export default TaskListItem;
