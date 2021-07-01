'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';
window.timer = '넌 왜 나를 호출하니?';
export default class LevelOne{
  constructor(){
    this.time = document.querySelector('.timer--bar');
    this.timerBar = document.querySelector('.timer--bar');
    this.progressBar = 950;
    this.sibal;
    this.time.addEventListener('click', () => {
       this.timer();
    })
  }

   timer(){ 
     setInterval(this.startTimer, 100);
  }

  startTimer(){
    console.log(this.timer);
  }
  // startTimer = () =>{
  //   if(this.progressBar >= 0){
  //     this.timerBar.style.width = this.progressBar - 4.5 +'px';
  //     this.progressBar = this.progressBar - 4.5;
  //   } else {
  //     clearInterval(this.timer);
  //   }
  // }
}