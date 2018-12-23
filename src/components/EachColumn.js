import React from 'react';
import TaskListItem from './TaskListItem';

const EachColumn = ({ tasks, statusToBeDisplayed, onStatusChange, onRemoveTask }) => {
  return (
    <div className="each-column">
      {tasks.map((task, index) => {
        if (task.status !== statusToBeDisplayed) return;

        return <TaskListItem task={task} index={index} onRemoveTask={onRemoveTask} onStatusChange={onStatusChange} />;
      })}
    </div>
  );
};

export default EachColumn;
