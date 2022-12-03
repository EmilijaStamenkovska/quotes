// Core
import React from 'react';
import PropTypes from 'prop-types';
// Style
import "./style.css";

const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={`
            button 
            ${props.customClassName}
            `}
            type={props.type}
        >
            {props.children}
        </button>
    )
};

export default Button;

Button.defaultProps = {
    onClick: () => { },
    customClassName: '',
    type: 'button'
};

Button.propTypes = {
    onClick: PropTypes.func,
    customClassName: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit'])
};