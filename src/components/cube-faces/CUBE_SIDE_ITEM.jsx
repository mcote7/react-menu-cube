import React from 'react';

const CUBE_SIDE_ITEM = ({side, handleItemSelect}) => {
  return (
    <div className={`cube__face cube__face--${side}`}>
      <div className="menu-group container-fluid">
        <span>
          <button onClick={(e)=>handleItemSelect(e)}
            className="m-3 menu_button" name="rotate-cube-side" value="menu">
            <span><i className="fa fa-cubes fa-2x" aria-hidden="true"></i></span>
          </button>
        </span>
      </div>
      <div className="item-location">
        {`@-${side}`}
      </div>
    </div>
  );
};
export default CUBE_SIDE_ITEM;