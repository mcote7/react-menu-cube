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
    if(e.target.className.includes('fa')) {
      console.log("targ", e.target)
      console.log("targ_parent_val", e.target.parentNode.value)
      state.currentClass = e.target.parentNode.value;
    } else {
      console.log('reg', e.target.value)
      state.currentClass = e.target.value;
    }
    // console.log("1",state.currentClass)
    // console.log("next",e.target.value)
    // console.log("2",state.currentClass)
  };

  // -- CHANGE COLORS ON CLASS CHANGE --->
  useEffect(()=>{

    const BUTTON_defaultBackgroundColor = 'rgba(255, 255, 255, 0.2)';
    const BUTTON_defaultBorderColor = 'rgba(255, 255, 255, 0.3)';
    const BUTTON_defaultTextColor = 'rgba(255, 255, 255, 0.5)';

    let CUBE_FACE_backgroundColor = '';
    switch (state.currentClass) {
      case 'menu':
        CUBE_FACE_backgroundColor = 'hsla(  0, 100%, 50%, 1)';
        break;
      case 'right':
        CUBE_FACE_backgroundColor = 'hsla( 60, 100%, 50%, 1)';
        break;
      case 'back':
        CUBE_FACE_backgroundColor = 'hsla(120, 100%, 50%, 1)';
        break;
      case 'left':
        CUBE_FACE_backgroundColor = 'hsla(180, 100%, 50%, 1)';
        break;
      case 'top':
        CUBE_FACE_backgroundColor = 'hsla(240, 100%, 50%, 1)';
        break;
      case 'bottom':
        CUBE_FACE_backgroundColor = 'hsla(300, 100%, 50%, 1)';
        break;
      default:
        CUBE_FACE_backgroundColor = 'hsla(  0, 100%, 50%, 1)';
    }
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
      }, i * 1250);
    }

    setTimeout(() => {
      state.currentClass = 'menu';
      state.playing = false;
    }, 7750);
    // console.log("done!")
  };

  // TIME --->
  const timeTravel = () => {
    const scene = document.getElementById('scene');
    scene.style.perspective = '1px';
    const timeIcon = document.getElementById('time');
    timeIcon.animate([
      {bottom: '45px', transform: 'scale(1) rotate(0deg)'},
      {bottom: '65px', transform: 'scale(2) rotate(-360deg)'},
      {bottom: '45px', transform: 'scale(1) rotate(0deg)'}
    ],{
        duration: 8250
    })
    scene.animate([
      {transform: 'scale(1)'},
      {transform: 'scale(0.2)'},
      {transform: 'scale(2.2)'},
      {transform: 'scale(1)'},
    ],{
      duration: 10755,
      easing: 'steps(10755)'
    })
    setTimeout(() => {
      playCube();
    }, 1000);
    setTimeout(() => {
      scene.style.perspective = '300px';
    }, 8760);
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
    const timeIcon = document.getElementById('time');
    if(state.darkMode) {
      document.body.style.backgroundColor = 'black';
      H20.style.opacity = 0.4;
      scene.style.webkitBoxReflect = 'below 20px linear-gradient( to bottom, transparent, rgba(255, 255, 255, 0.3))';
      timeIcon.style.color = 'white';
    }
    else {
      document.body.style.backgroundColor = 'white';
      H20.style.opacity = 0;
      scene.style.webkitBoxReflect = 'below 20px linear-gradient( to bottom, transparent, rgba(255, 255, 255, 0.6))';
      timeIcon.style.color = 'black';
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
    <div id="time" onClick={timeTravel}>
      <span><i className="fa fa-clock-o fa-2x" aria-hidden="true"></i></span>
    </div>
  </>);
};
export default CUBE_MAIN_RS;