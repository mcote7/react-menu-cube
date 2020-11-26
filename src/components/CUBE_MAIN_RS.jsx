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

  // -- CHANGE COLORS ON CLASS CHANGE --->
  useEffect(()=>{

    const BUTTON_defaultBackgroundColor = 'rgba(255, 255, 255, 0.2)';
    const BUTTON_defaultBorderColor = 'rgba(255, 255, 255, 0.3)';
    const BUTTON_defaultTextColor = 'rgba(255, 255, 255, 0.5)';

    const CUBE_FACE_target = document.getElementsByClassName(`cube__face--${state.currentClass}`)[0];
    // console.log({CUBE_FACE_target})
    const CUBE_FACE_style = window.getComputedStyle(CUBE_FACE_target);
    // console.log({CUBE_FACE_style})
    const CUBE_FACE_backgroundColor = CUBE_FACE_style.getPropertyValue('background-color').replace('0.7', '1');
    // console.log({CUBE_FACE_backgroundColor})
    const ALL_BUTTONS = document.getElementsByClassName('menu_button');
    // console.log({ALL_BUTTONS})
    const play = document.getElementById('play');
    const sign = document.getElementById('sign');

    for(let i = 0; i < ALL_BUTTONS.length; i++) {
      // console.log('n',button[i])
      if(ALL_BUTTONS[i].value === state.currentClass) {
        ALL_BUTTONS[i].style.backgroundColor = CUBE_FACE_backgroundColor;
        ALL_BUTTONS[i].style.borderColor = 'rgba(255, 255, 255, 0.75)';
        ALL_BUTTONS[i].style.color = 'rgba(255, 255, 255, 1)';
        play.style.color = CUBE_FACE_backgroundColor;
        sign.style.color = CUBE_FACE_backgroundColor;
      }
      else {
        ALL_BUTTONS[i].style.backgroundColor = BUTTON_defaultBackgroundColor;
        ALL_BUTTONS[i].style.borderColor = BUTTON_defaultBorderColor;
        ALL_BUTTONS[i].style.color = BUTTON_defaultTextColor;
      }
    }
  },[state.currentClass]);

  // -- PLAY CUBE --->
  const playCube = () => {
    const play = document.getElementById('play');
    play.style.color = 'white';
    const sign = document.getElementById('sign');
    sign.style.color = 'white';
    play.animate([
      {transform: 'rotate(0deg) scale(1)', marginBottom: '0px', marginLeft: '0px'},
      {transform: 'rotate(180deg)'},
      {transform: 'rotate(360deg) scale(2.5)', marginBottom: '60vh', marginLeft: '20px'},
      {transform: 'rotate(180deg)'},
      {transform: 'rotate(0deg) scale(1)', marginBottom: '0px', marginLeft: '0px'},
    ], {
      duration: 1500,
      easing: 'steps(1000)'
    });
    setTimeout(() => {
      const classes = ['menu', 'right', 'back', 'left', 'top', 'bottom'];
        for(let i = 0; i < classes.length; i++) {
        setTimeout(() => {
          state.currentClass = classes[i];
          // console.log('classes[i]',classes[i])
        }, i * 1250);
      }
    }, 250);
    setTimeout(() => {
      state.currentClass = 'menu';
    }, 7750);
    // console.log("done!")
  };

  // -- OPENING ENTERANCE --->
  useEffect(()=>{
    playCube();
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
    <div onClick={playCube} className="play-cube">
      <span id="play"><i className="fa fa-cube fa-2x" aria-hidden="true"></i></span>
    </div>
    <div id="sign">Michael Cote 2021</div>
  </>);
};
export default CUBE_MAIN_RS;