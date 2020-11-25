import React from 'react';

const CUBE_SIDE_ITEM = ({side, handleItemSelect}) => {
  return (
    <div className={`cube__face cube__face--${side}`}>
      <span>
        <button className="m-3 menu_button" name="rotate-cube-side" value="menu"
        onClick={(e)=>handleItemSelect(e)}>menu</button>
      </span>
      <span>
        {`@-${side}`}
      </span>
    </div>
  );
}

export default CUBE_SIDE_ITEM;