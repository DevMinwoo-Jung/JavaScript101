'use strict'
import MessageBox from './messageBox.js';
import LvOneField from './levelOneField';


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
  withAnswrCount(answrCount){
    this.answrCount = answrCount;
    return this;
  }
  withWrongCount(wrongCount){
    this.wrongCount = wrongCount;
    return this;
  }

  build() {
    return new LevelOne(
      this.progressBar,
      this.minusTimeBar,
      this.answrCount,
      this.wrongCount
    );
  }

}

class LevelOne{
  constructor(progressBar, minusTimeBar, answrCount, wrongCount){
    this.progressBar = progressBar;
    this.minusTimeBar = minusTimeBar;
    this.answrCount = answrCount;
    this.wrongCount = wrongCount;

    this.timerBar = document.querySelector('.timer--bar');
    this.hearts = document.querySelectorAll('.fa-heart');

    this.timer;
    this.life = 3;
    this.timerBar.addEventListener('click', () => {
      this.timer = setInterval(this.startTimer, 100);
    });

    this.field = new LvOneField(answrCount, wrongCount);
  }

  initGame(){
    this.field.init();
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

  gameOver(){
    messageBox.show();
    this.stopGame();
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
    for(let i=0; i<3; i++){
    this.hearts[i].className = 'fas fa-heart';
    }
  }

  minusHearts = (i) => {
    this.hearts[i].className = 'fas fa-heart-broken';
    this.life--;
    if (this.life == 0){
    this.gameOver();
    }
  }
}