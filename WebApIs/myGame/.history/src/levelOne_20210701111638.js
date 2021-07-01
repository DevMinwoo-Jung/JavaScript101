'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';

export default class LevelOne{
  constructor(){
    // this.timer = document.getElementsByClassName('timer--bar')[0].style.width;
    this.time = document.querySelector('.timer--bar');
    this.time.addEventListener('click', () => {
      this.timer();
    })
  }

  timer(){
    let progressBar = 950;
    this.time.style.width = progressBar - 95 +'px';
  }
}