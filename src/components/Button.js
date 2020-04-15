import React from 'react';

const Button = ({ buttonName, clickHandler }) => (
<button id="next-quote" onClick={clickHandler}>{buttonName}</button>
);

export default Button;