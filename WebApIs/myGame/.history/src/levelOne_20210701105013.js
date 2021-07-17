'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';

export default class LevelOne{
  constructor(){
    this.timer = document.getElementsByClassName('.timer--bar')[0].style.width;
  }

  timer(){
    this.timer = this.timer - (this.timer * 0.01); 
  }
}