import React, { useState } from 'react';

import '../CSS/cube.css';

const CUBE_MAIN = () => {
  
  const [currentClass, setCurrentClass] = useState('front');

  return (<>

    <div className="row my-5">
      <div className="col">
        <div className="radio-group">
          <label>
            <input type="radio" name="rotate-cube-side" value="front" onChange={(e)=>setCurrentClass(e.target.value)}/> front
          </label>
          <label>
            <input type="radio" name="rotate-cube-side" value="right" onChange={(e)=>setCurrentClass(e.target.value)}/> right
          </label>
          <label>
            <input type="radio" name="rotate-cube-side" value="back" onChange={(e)=>setCurrentClass(e.target.value)}/> back
          </label>
          <label>
            <input type="radio" name="rotate-cube-side" value="left" onChange={(e)=>setCurrentClass(e.target.value)}/> left
          </label>
          <label>
            <input type="radio" name="rotate-cube-side" value="top" onChange={(e)=>setCurrentClass(e.target.value)}/> top
          </label>
          <label>
            <input type="radio" name="rotate-cube-side" value="bottom" onChange={(e)=>setCurrentClass(e.target.value)}/> bottom
          </label>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <div className="scene m-auto">
          <div className={`cube show-${currentClass}`}>
            <div className="cube__face cube__face--front">front</div>
            <div className="cube__face cube__face--back">back</div>
            <div className="cube__face cube__face--right">right</div>
            <div className="cube__face cube__face--left">left</div>
            <div className="cube__face cube__face--top">top</div>
            <div className="cube__face cube__face--bottom">bottom</div>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default CUBE_MAIN;