'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';

export default class LevelOne{
  constructor(){
    this.timer = document.querySelector('.timer--bar');
  }

  timer(){
    let timerBar = this.timer.style.width;
    timerBar = timerBar - (timerBar * 0.01); 
    
  }
}