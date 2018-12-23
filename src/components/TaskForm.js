import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import './TaskForm.css';

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: '',
      isError: false,
    };
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

  onInputLoaded = taskInput => {
    this.taskInput = taskInput;
  };

  onAddTask = () => {
    const { taskName } = this.state;

    if (!taskName) {
      this.setState({
        isError: true,
      });
      return;
    }

    this.setState(
      {
        taskName: '',
      },
      () => {
        this.props.onAddTask(taskName);
        this.focusTextField();
      },
    );
  };

  focusTextField = () => {
    if (this.taskInput) this.taskInput.focus();
  };

  onResetAll = () => {
    this.setState(
      {
        taskName: '',
      },
      () => {
        this.props.onResetAll();
        this.focusTextField();
      },
    );
  };

  onKeyPress = e => {
    if (e.charCode === 13) this.onAddTask();
  };

  render() {
    return (
      <div className="task-form-wrapper">
        <Input
          value={this.state.taskName}
          onChange={this.onTaskTextChange}
          isError={this.state.isError}
          onInputLoaded={this.onInputLoaded}
          onKeyPress={this.onKeyPress}
        />
        <Button label="Reset Text" onClick={this.onResetText} theme="orange" />
        <Button label="Add Me" onClick={this.onAddTask} theme="green" />
        <Button label="Reset All" onClick={this.onResetAll} theme="red" />
      </div>
    );
  }
}

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
