'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';

export default class LevelOne{
  constructor(){
    this.timer = document.querySelector('.timer--bar');
  }

  timer(){
    this.timer.style.width = this.timer.style.width - (this.timer.style.width * 0.01); 
    
  }
}