'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';
export default class LevelOne{
  constructor(){
    this.timerBar = document.querySelector('.timer--bar');
    this.progressBar = 950;
    this.minusTimeBar = 475;
    this.stop = true;
    this.timerBar.addEventListener('click', () => {
       this.timer();
    })
  }

   timer(){ 
     setInterval(this.startTimer, 1000);
  }

  startTimer = () =>{
    if(this.stop){
      this.timerBar.style.width = this.progressBar - this.minusTimeBar +'px';
      this.progressBar = this.progressBar - this.minusTimeBar;
      this.barColorChange();
      console.log(this.progressBar);
    } else if(this.progressBar == 0){
      clearInterval(this.timer);
      this.stopGame();
    } else {
      throw new Error("뭐야");
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
      alert("게임 끝났슈");
  }
}