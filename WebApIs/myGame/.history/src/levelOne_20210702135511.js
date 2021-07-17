'use strict'
import MessageBox from './messageBox.js';

const messageBox = new MessageBox();

export default class LevelOneBuilder{
  withTimerBar(progressBar){
    this.progressBar = progressBar;
    return this;
  }
  withMinusTimerBar(minusTimeBar){
    this.minusTimeBar = minusTimeBar;
    return this;
  }

  build() {
    return new LevelOne(
      this.timerBar,
      this.minusTimeBar
    );
  }

}

class LevelOne{
  constructor(progressBar, minusTimeBar){
    this.timerBar = document.querySelector('.timer--bar');
    this.progressBar = progressBar;
    this.minusTimeBar = minusTimeBar;
    this.timer;
    this.timerBar.addEventListener('click', () => {
       this.timer = setInterval(this.startTimer, 100);
    })
  }

  startTimer = () =>{
    if(this.progressBar > 0){
      this.timerBar.style.width = this.progressBar - this.minusTimeBar +'px';
      this.progressBar = this.progressBar - this.minusTimeBar;
      this.barColorChange();
      console.log(this.progressBar);
    } else if (this.progressBar == 0) {
      this.stopGame();
      messageBox.show();
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
  }

  restart = () => {
    this.timerBar.style.width = '950px';
    messageBox.messageBox.classList.remove('show');
    console.log(this.timerBar);
    this.timerBar.style.backgroundColor = 'black';
    this.timerBar.style.transform = 'scale(1)'
    this.progressBar = 950;
  }

}