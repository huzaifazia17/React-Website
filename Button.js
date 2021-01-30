import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'] // gives an outline or no outline to button

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'] // diff options for button size

const COLOR = ['primary', 'blue', 'red', 'green'] 

export const Button =({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor
}) => {

const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; // see if button created has a button style

const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];

    return ( // assigns and check these properties for the button
        <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize} 
         ${checkButtonColor}`} 
         onClick={onClick} 
         type={type}
         > 
        {children}
        </button>
    );
};

