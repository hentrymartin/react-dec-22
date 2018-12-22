import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
  return (
    <div className="button-wrapper">
      <button className={props.theme} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
};

Button.defaultProps = {
  label: 'Submit',
  onClick: () => {},
  theme: 'green',
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['green', 'red', 'orange']),
};

export default Button;
