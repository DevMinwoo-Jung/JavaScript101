'use strict'
import MessageBox from './messageBox.js';

const messageBox = new MessageBox();

export default class LevelOneBuilder{
  withProgressBar(progressBar){
    this.progressBar = progressBar;
    return this;
  }
  withMinusTimerBar(minusTimeBar){
    this.minusTimeBar = minusTimeBar;
    return this;
  }

  build() {
    return new LevelOne(
      this.progressBar,
      this.minusTimeBar
    );
  }

}

class LevelOne{
  constructor(progressBar, minusTimeBar){
    this.progressBar = progressBar;
    this.minusTimeBar = minusTimeBar;

    this.timerBar = document.querySelector('.timer--bar');
    this.hearts = document.querySelectorAll('.fa-heart');

    this.timer;
    this.life = 3;
    this.timerBar.addEventListener('click', () => {
      this.timer = setInterval(this.startTimer, 100);
    })
  }

  startTimer = () =>{
    if(this.progressBar > 0){
      this.timerBar.style.width = this.progressBar - this.minusTimeBar +'px';
      this.progressBar = this.progressBar - this.minusTimeBar;
      this.barColorChange();
    } else if (this.progressBar <= 0) {
      messageBox.show();
      this.stopGame();
    } 
  }

  gameOver = () =>{
    if (this.life === 0){
      messageBox.show();
      this.stopGame();
    }
  }

  barColorChange(){
    if(this.timerBar.style.width < '300px'){
      this.timerBar.style.backgroundColor = 'red';
    }
  }

  stopGame() {
      clearInterval(this.timer);  
  }

  restart = () => {
    this.timerBar.style.width = '950px';
    messageBox.messageBox.classList.remove('show');
    this.timerBar.style.backgroundColor = 'black';
    this.progressBar = 950;
    this.life = 3;
  }

  minusHearts = (i) => {
    this.hearts[i].className = 'fas fa-heart-broken';
    this.life--;
    console.log(this.life);
  }
}