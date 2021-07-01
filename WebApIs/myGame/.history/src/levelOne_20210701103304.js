'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';

export default class LevelOne{
  constructor(){
    this.timer = document.querySelector('.timer--bar');
  }

  timer(){
    let timer = document.querySelector('.timer--bar').offsetWidth;
  }
}