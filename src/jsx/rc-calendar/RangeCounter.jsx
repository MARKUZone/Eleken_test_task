import React from 'react';
import createReactClass from 'create-react-class';

function RangeCounter(props){
  return (
    <div className="range-counter">
      <p>This is special value: {props.nVal}.</p>
    </div>
  )
}

alert("It's your lucky day! \n RangeCounter.js is loaded");

export default RangeCounter;
