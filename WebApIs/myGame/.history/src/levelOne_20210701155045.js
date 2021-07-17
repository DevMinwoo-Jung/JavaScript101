'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';
export default class LevelOne{
  constructor(){
    this.timerBar = document.querySelector('.timer--bar');
    this.progressBar = 950;
    this.minusTimeBar = 475;
    this.stop;
    this.timerBar.addEventListener('click', () => {
       this.timer();
    });
  }

   timer(){ 
     setInterval(this.startTimer, 1000);
  }

  startTimer = () =>{
    if(this.progressBar > 0){
      console.log(this.progressBar = this.progressBar - this.minusTimeBar);
      console.log(this.progressBar);
      this.progressBar = this.progressBar - this.minusTimeBar;
      this.timerBar.style.width = this.progressBar - this.minusTimeBar +'px';
      this.barColorChange();
    } else if(this.progressBar == 0){
      clearInterval(this.startTimer);
      this.stop = this.stopGame();
    } else {
      throw new Error("뭐야");
    }
  }

  barColorChange(){
    if(this.timerBar.style.width < '300px'){
      this.timerBar.style.backgroundColor = 'red';
      this.timerBar.style.transform = 'scale(1.05)'
    }
  }

  stopGame() {
    if(this.timerBar.style.width === '0px'){
      console.log("계속 출력되나");
      return;
    }
  }
}