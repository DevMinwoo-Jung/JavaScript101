'use strict'

import Scroll from './scroll.js';
import StartGame from './startGame.js';
import ItemList from './itemList.js';
window.timer = '넌 왜 나를 호출하니?';
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

  // startTimer(){
  //   // 이렇게하면 window의 timer를 불러오는거임!
  //   console.log(this.timer);
  // }
  startTimer = () =>{
    if(this.progressBar >= 0){
      this.timerBar.style.width = this.progressBar - 4.5 +'px';
      this.progressBar = this.progressBar - 4.5;
    } else {
      clearInterval(this.timer);
    }
  }

  barColorChange(){
    if(this.timerBar < (this.timerBar / 70)){
      this.timerBar.style.color = 'red';
    }
  }
}