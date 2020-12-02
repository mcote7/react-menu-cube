import React from 'react';

const CUBE_FRONT_MENU = ({handleItemSelect}) => {
  return (
    <div className="cube__face cube__face--menu">
      <div className="menu-group container-fluid">

        <div className="row">
          <div className="col">
            <span>
              <button onClick={(e)=>handleItemSelect(e)}
                className="m-3 menu_button" name="rotate-cube-side" value="top">
                <i onClick={(e)=>handleItemSelect(e)} className="fa fa-arrow-up fa-2x" aria-hidden="true"></i>
              </button>
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <span>
              <button onClick={(e)=>handleItemSelect(e)}
                className="mr-3 menu_button" name="rotate-cube-side" value="left">
                <i onClick={(e)=>handleItemSelect(e)} className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
              </button>
            </span>
            <span>
              <button onClick={(e)=>handleItemSelect(e)}
                className="m-3 menu_button" name="rotate-cube-side" value="back">
                <i onClick={(e)=>handleItemSelect(e)} className="fa fa-undo fa-2x" aria-hidden="true"></i>
              </button>
            </span>
            <span>
              <button onClick={(e)=>handleItemSelect(e)}
                className="ml-3 menu_button" name="rotate-cube-side" value="right">
                <i onClick={(e)=>handleItemSelect(e)} className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
              </button>
            </span>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <span>
              <button onClick={(e)=>handleItemSelect(e)}
                className="m-3 menu_button" name="rotate-cube-side" value="bottom">
                <i onClick={(e)=>handleItemSelect(e)} className="fa fa-arrow-down fa-2x" aria-hidden="true"></i>
              </button>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
export default CUBE_FRONT_MENU;