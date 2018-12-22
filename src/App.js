import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      tasks: [],
      isError: false,
    };

    this.taskInput = null;
  }

  componentDidMount() {
    this.focusTextField();
  }

  onTaskTextChange = value => {
    this.setState({
      taskName: value,
      isError: false,
    });
  };

  onResetText = () => {
    this.setState(
      {
        taskName: '',
      },
      () => {
        this.focusTextField();
      },
    );
  };

  onAddTask = () => {
    const { taskName, tasks } = this.state;

    if (!taskName) {
      this.setState({
        isError: true,
      });
      return;
    }

    this.setState(
      {
        taskName: '',
        tasks: [...tasks, taskName],
        // tasks: tasks.concat([taskName]),
        isError: false,
      },
      () => {
        this.focusTextField();
      },
    );
  };

  onResetAll = () => {
    this.setState(
      {
        tasks: [],
      },
      () => {
        this.focusTextField();
      },
    );
  };

  focusTextField = () => {
    if (this.taskInput) this.taskInput.focus();
  };

  onInputLoaded = taskInput => {
    this.taskInput = taskInput;
  };

  render() {
    return (
      <div className="app">
        {/* This is the form to add the item */}
        <TaskForm
          taskName={this.state.taskName}
          onInputLoaded={this.onInputLoaded}
          onResetAll={this.onResetAll}
          onResetText={this.onResetText}
          onAddTask={this.onAddTask}
          onTaskTextChange={this.onTaskTextChange}
          isError={this.state.isError}
        />

        {/* This renders the tasks list */}
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
