'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';

export default class LevelOne{
  constructor(){
    this.time = document.querySelector('.timer--bar');
    this.timerBar = document.querySelector('.timer--bar').style.width = '950px';
    this.progressBar = 950;
    this.time.addEventListener('click', () => {
       this.timer();
    })
  }

   timer = () => { 
    console.log('실행됨?');
    console.log(this.timerBar, this.progressBar);

    setInterval(startTimer, 1000);

    function startTimer(){
    if(true >= 0){
      console.log("여기 안오지");
      console.log(this.progressBar);
      console.log(this.timerBar);
      this.timerBar = this.progressBar - 95 +'px';
      this.progressBar = this.progressBar - 95;
    } else {
      clearInterval(this.timer);
    }
    
   }
    
  }
}