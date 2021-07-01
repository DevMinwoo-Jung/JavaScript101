'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';

export default class LevelOne{
  constructor(){
    this.time = document.querySelector('.timer--bar');
    this.timerBar = document.querySelector('.timer--bar').style.width = '950px';
    this.time.addEventListener('click', () => {
       this.timer();
    })
  }

   timer(){ 
    console.log('실행됨?');
    let progressBar = 950;
    setInterval(startTimer, 1000);
    function startTimer(){
    if(progressBar >= 0){
      console.log(progressBar);
      this.timerBar = progressBar - 95 +'px';
      progressBar = progressBar - 95;
    } else {
      clearInterval(this.timer);
    }
  }
    
  }
}