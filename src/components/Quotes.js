import React from 'react';
import Button from './Button'

const Quotes = (props) => (
<div className="quote-container">
    <p id="text">"{props.chooseQuote ?   props.chooseQuote.quote  :'' }"</p>
    <p id="author">-{props.chooseQuote ?   props.chooseQuote.author  :'' }</p>
    
        <Button buttonName = "Next Quote" clickHandler = {props.nextQuoteClickHandler} />
    
    
</div>
);

export default Quotes;