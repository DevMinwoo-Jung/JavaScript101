'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';

export default class LevelOne{
  constructor(){
    this.time = document.querySelector('.timer--bar');
    this.timerBar = document.querySelector('.timer--bar').style.width = '950px';
    this.progressBar = 950;
    this.sibal;
    this.time.addEventListener('click', () => {
       this.timer();
    })
  }

   timer(){ 
    this.sibal = this.startTimer();
    setInterval(this.sibal, 100);
  }

  startTimer(){
    if(this.progressBar >= 0){
      console.log(this.progressBar);
      console.log(this.timerBar);
      this.timerBar = this.progressBar - 95 +'px';
      this.progressBar = this.progressBar - 95;
    } else {
      clearInterval(this.sibal);
    }
  }
}