import React, { useState } from 'react';

import '../CSS/cube.css';

const CUBE_MAIN = () => {
  
  const [currentClass, setCurrentClass] = useState('front');

  return (<>

    <div className="row mt-1 mb-2">
      <div className="col">
        <div className="radio-group">

            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="front"
              onClick={(e)=>setCurrentClass(e.target.value)}>front</button>
            </span>

            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="right"
              onClick={(e)=>setCurrentClass(e.target.value)}>right</button>
            </span>

            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="back"
              onClick={(e)=>setCurrentClass(e.target.value)}>back</button>
            </span>

            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="left"
              onClick={(e)=>setCurrentClass(e.target.value)}>left</button>
            </span>

            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="top"
              onClick={(e)=>setCurrentClass(e.target.value)}>top</button>
            </span>

            <span>
              <button className="m-3 menu_button" name="rotate-cube-side" value="bottom"
              onClick={(e)=>setCurrentClass(e.target.value)}>bottom</button>
            </span>

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
          <div className="water"></div>
        </div>
      </div>
    </div>
  </>);
};

export default CUBE_MAIN;