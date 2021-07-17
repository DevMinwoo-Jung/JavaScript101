'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';
export default class LevelOne{
  constructor(){
    this.timerBar = document.querySelector('.timer--bar');
    this.progressBar = 950;
    this.timerBar.addEventListener('click', () => {
       this.timer();
    })
  }

   timer(){ 
     setInterval(this.startTimer, 100);
  }

  startTimer = () =>{
    if(this.progressBar >= 0){
      this.timerBar.style.width = this.progressBar - 4.5 +'px';
      this.progressBar = this.progressBar - 4.5;
      this.barColorChange();
    } else {
      clearInterval(this.timer);
    }
  }

  barColorChange(){
    console.log(this.timerBar);
    if(this.timerBar.style.width < '300px'){
      this.timerBar.style.backgroundColor = 'red';
      this.timerBar.style.transform = 'scale(1.05)'
    }
  }

  stopGame(){
    if(this.timerBar.style.width === 0){
      alert("게임 끝났슈");
    }
  }
}