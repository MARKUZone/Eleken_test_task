import React from 'react';
import createReactClass from 'create-react-class';

function RangeCounter(props){
  return (
    <div className="range-counter">
      <p>{props.fullDate}</p>
    </div>
  )
}

alert("It's your lucky day! \n RangeCounter.js is loaded");

export default RangeCounter;
