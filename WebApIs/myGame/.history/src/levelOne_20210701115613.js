'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';

export default class LevelOne{
  constructor(){
    this.time = document.querySelector('.timer--bar');
    this.progressBar = 950;
    this.time.addEventListener('click', () => {
       setInterval(this.timer, 1000);
    })
  }

   timer(){ 
    let time = document.querySelector('.timer--bar').style.width = '950px';
    let progressBar = 950;
    if(progressBar >= 0){
      console.log(progressBar);
      time = progressBar - 95 +'px';
      progressBar = progressBar-95;
    } else {
      clearInterval(this.timer);
    }
    
  }
}