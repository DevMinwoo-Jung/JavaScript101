'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';
export default class LevelOne{
  constructor(){
    this.timerBar = document.querySelector('.timer--bar');
    this.progressBar = 950;
    this.minusTimeBar = 475;
    this.timer = setInterval(this.startTimer, 1000);
    this.timerBar.addEventListener('click', () => {
       this.timer();
    })
  }
  
  startTimer = () =>{
    if(this.progressBar > 0){
      this.timerBar.style.width = this.progressBar - this.minusTimeBar +'px';
      this.progressBar = this.progressBar - this.minusTimeBar;
      this.barColorChange();
      console.log(this.progressBar);
    } else {
      this.stopGame();
    }
  }

  barColorChange(){
    console.log(this.timerBar);
    if(this.timerBar.style.width < '300px'){
      this.timerBar.style.backgroundColor = 'red';
      this.timerBar.style.transform = 'scale(1.05)'
    }
  }

  stopGame() {
      clearInterval(this.timer);
      console.log("계속도니..?");
  }
}