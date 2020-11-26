import React, { useEffect } from 'react';

import '../CSS/cube.css';

import useRS from "radioactive-state";

import CUBE_FRONT_MENU from './cube-faces/CUBE_FRONT_MENU';
import CUBE_SIDE_ITEM from './cube-faces/CUBE_SIDE_ITEM';

const CUBE_MAIN_RS = () => {
  
  const state = useRS({
    currentClass: 'menu',
    darkMode: true,
    playing: false,
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
    const dark_mode = document.getElementById('dark-mode');

    for(let i = 0; i < ALL_BUTTONS.length; i++) {
      // console.log('n',button[i])
      if(ALL_BUTTONS[i].value === state.currentClass) {
        ALL_BUTTONS[i].style.backgroundColor = CUBE_FACE_backgroundColor;
        ALL_BUTTONS[i].style.borderColor = 'rgba(255, 255, 255, 1)';
        ALL_BUTTONS[i].style.borderRadius = '0.2rem';
        ALL_BUTTONS[i].style.color = 'rgba(255, 255, 255, 1)';
        play.style.color = CUBE_FACE_backgroundColor;
        sign.style.color = CUBE_FACE_backgroundColor;
        dark_mode.style.color = CUBE_FACE_backgroundColor;
      }
      else {
        ALL_BUTTONS[i].style.backgroundColor = BUTTON_defaultBackgroundColor;
        ALL_BUTTONS[i].style.borderColor = BUTTON_defaultBorderColor;
        ALL_BUTTONS[i].style.color = BUTTON_defaultTextColor;
        ALL_BUTTONS[i].style.borderRadius = '50%';
      }
    }
  },[state.currentClass]);

  // -- PLAY CUBE --->
  const playCube = () => {

    state.playing = true;

    const play = document.getElementById('play');
    const sign = document.getElementById('sign');
    const dark_mode = document.getElementById('dark-mode');

    if(state.darkMode) {
    play.style.color = 'white';
    sign.style.color = 'white';
    dark_mode.style.color = 'white';
    }
    else {
      play.style.color = 'black';
      sign.style.color = 'black';
      dark_mode.style.color = 'black';
    }

    play.animate([
      {transform: 'rotate(0deg) scale(1)', marginBottom: '0px', marginLeft: '0px'},
      {transform: 'rotate(180deg)'},
      {transform: 'rotate(360deg) scale(2.5)', marginBottom: '60vh', marginLeft: '40px'},
      {transform: 'rotate(180deg)'},
      {transform: 'rotate(0deg) scale(1)', marginBottom: '0px', marginLeft: '0px'},
    ], {
      duration: 1500,
      easing: 'steps(1500)'
    });

    const classes = ['menu', 'right', 'back', 'left', 'top', 'bottom'];
      for(let i = 0; i < classes.length; i++) {
      setTimeout(() => {
        state.currentClass = classes[i];
        // console.log('classes[i]',classes[i])
      }, i * 1200);
    }

    setTimeout(() => {
      state.currentClass = 'menu';
      state.playing = false;
    }, 7700);
    // console.log("done!")
  };


  // -- OPENING ENTERANCE --->
  useEffect(()=>{
    playCube();
  },[]);// eslint-disable-line
  // -- LINTER DISSABLED FOR RADIOACTIVE STATE -

  // -- DARKMODE TOGGLE --->
  useEffect(()=>{
    const H20 = document.getElementById('water');
    const scene = document.getElementById('scene');
    if(state.darkMode) {
      document.body.style.backgroundColor = 'black';
      H20.style.opacity = 0.4;
      scene.style.webkitBoxReflect = 'below 20px linear-gradient( to bottom, transparent, rgba(255, 255, 255, 0.3))';
    }
    else {
      document.body.style.backgroundColor = 'white';
      H20.style.opacity = 0;
      scene.style.webkitBoxReflect = 'below 20px linear-gradient( to bottom, transparent, rgba(255, 255, 255, 0.6))';
    }
  },[state.darkMode])

  return (<>
    <div className="row mt-5">
      <div className="col">
        <div id='scene' className="scene m-auto">
          <div className={`cube show-${state.currentClass}`}>
            <CUBE_FRONT_MENU handleItemSelect={handleItemSelect}/>
            <CUBE_SIDE_ITEM side={'back'} handleItemSelect={handleItemSelect}/>
            <CUBE_SIDE_ITEM side={'right'} handleItemSelect={handleItemSelect}/>
            <CUBE_SIDE_ITEM side={'left'} handleItemSelect={handleItemSelect}/>
            <CUBE_SIDE_ITEM side={'top'} handleItemSelect={handleItemSelect}/>
            <CUBE_SIDE_ITEM side={'bottom'} handleItemSelect={handleItemSelect}/>
          </div>
          <div id="water" className="water"></div>
        </div>
      </div>
    </div>
    <div id="play" onClick={playCube} className="play-cube">
      <span><i className="fa fa-cube fa-3x" aria-hidden="true"></i></span>
    </div>
    <div id="sign">Michael Cote 2021</div>
    <div onClick={()=>{state.darkMode = !state.darkMode}}>
      <span>
        {state.darkMode ?
          <i id="dark-mode" className="fa fa-sun-o fa-2x sun" aria-hidden="true"></i>
          : <i id="dark-mode" className="fa fa-moon-o fa-2x moon" aria-hidden="true"></i>}
      </span>
    </div>
  </>);
};
export default CUBE_MAIN_RS;