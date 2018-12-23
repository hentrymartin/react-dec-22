import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  onAddTask = taskName => {
    const { tasks } = this.state;
    const task = {
      name: taskName,
      status: 'TODO',
    };
    this.setState({
      tasks: [...tasks, task],
      // tasks: tasks.concat([taskName]),
    });
  };

  onResetAll = () => {
    this.setState({
      tasks: [],
    });
  };

  onRemoveTask = index => {
    const tasksCopy = [...this.state.tasks];

    tasksCopy.splice(index, 1);

    this.setState({
      tasks: tasksCopy,
    });
  };

  onStatusChange = (task, index) => {
    if (task.status === 'TODO') {
      task.status = 'IN_PROGRESS';
    } else if (task.status === 'IN_PROGRESS') {
      task.status = 'COMPLETED';
    }

    const { tasks } = this.state;

    this.setState({
      tasks: tasks.map((item, innerIndex) => {
        if (index === innerIndex) {
          return task;
        }

        return item;
      }),
    });
  };

  render() {
    return (
      <div className="app">
        {/* This is the form to add the item */}
        <TaskForm onResetAll={this.onResetAll} onAddTask={this.onAddTask} />

        {/* This renders the tasks list */}
        <TaskList tasks={this.state.tasks} onRemoveTask={this.onRemoveTask} onStatusChange={this.onStatusChange} />
      </div>
    );
  }
}

export default App;
