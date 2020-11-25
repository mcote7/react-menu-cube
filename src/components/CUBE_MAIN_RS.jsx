import React, { useEffect } from 'react';

import '../CSS/cube.css';

import useRS from "radioactive-state";

import CUBE_FRONT_MENU from './cube-faces/CUBE_FRONT_MENU';
import CUBE_SIDE_ITEM from './cube-faces/CUBE_SIDE_ITEM';

const CUBE_MAIN_RS = () => {
  
  const state = useRS({
    currentClass: 'menu'
  });

  // -- CHANGE SIDES --->
  const handleItemSelect = (e) => {
    // console.log("1",state.currentClass)
    // console.log("next",e.target.value)
    state.currentClass = e.target.value;
    // console.log("2",state.currentClass)
  };

  // -- CHANGE BUTTON COLOR --->
  useEffect(()=>{

    const defaultColor = 'rgba(255, 255, 255, 0.2)';
    const defaultBorderColor = 'rgba(255, 255, 255, 0.3)';
    const defaultTextColor = 'rgba(255, 255, 255,1)';

    const target = document.getElementsByClassName(`cube__face--${state.currentClass}`)[0];
    // console.log({target})
    const style = window.getComputedStyle(target);
    // console.log({style})
    const color = style.getPropertyValue('background-color').replace('0.7', '1');
    // console.log({color})
    const button = document.getElementsByClassName('menu_button');
    // console.log({button})
    for(let i = 0; i < button.length; i++) {
      // console.log('n',button[i])
      if(button[i].value === state.currentClass) {
        button[i].style.backgroundColor = color;
        button[i].style.borderColor = 'rgba(255, 255, 255, 0.75)';
        button[i].style.color = 'rgba(0,0,0,1)';
      }
      else {
        button[i].style.backgroundColor = defaultColor;
        button[i].style.borderColor = defaultBorderColor;
        button[i].style.color = defaultTextColor;
      }
    }
  },[state.currentClass]);

  // -- OPENING ENTERANCE --->
  useEffect(()=>{
    setTimeout(() => {
      const buttons = document.getElementsByClassName('menu_button');
      // console.log('buttons',buttons)
        for(let i = 0; i < buttons.length-4; i++) {
        setTimeout(() => {
          state.currentClass = buttons[i].value;
          // console.log('button[i] val',buttons[i].value)
        }, i * 1000);
      }
    }, 250);
    setTimeout(() => {
      state.currentClass = 'menu';
    }, 6250);
  },[]);// eslint-disable-line
  // -- LINTER DISSABLED FOR RADIOACTIVE STATE -

  return (<>

    <div className="row mt-5">
      <div className="col">
        <div className="scene m-auto">
          <div className={`cube show-${state.currentClass}`}>
            <CUBE_FRONT_MENU handleItemSelect={handleItemSelect}/>
            <CUBE_SIDE_ITEM side={'back'} handleItemSelect={handleItemSelect}/>
            <CUBE_SIDE_ITEM side={'right'} handleItemSelect={handleItemSelect}/>
            <CUBE_SIDE_ITEM side={'left'} handleItemSelect={handleItemSelect}/>
            <CUBE_SIDE_ITEM side={'top'} handleItemSelect={handleItemSelect}/>
            <CUBE_SIDE_ITEM side={'bottom'} handleItemSelect={handleItemSelect}/>
          </div>
          <div className="water"></div>
        </div>
      </div>
    </div>
  </>);
};

export default CUBE_MAIN_RS;