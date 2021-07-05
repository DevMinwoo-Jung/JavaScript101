'use strict'
import MessageBox from './messageBox.js';
import {ItemType,LvOneField} from './levelOneField.js';


const messageBox = new MessageBox();



export class LevelOneBuilder{
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
    this.answers = document.querySelectorAll('.answer');
    this.wrongs = document.querySelectorAll('.wrong');

    this.timer;
    this.life = 3;
    this.i = 0;

    this.field = new LvOneField(answrCount, wrongCount);

    this.timerBar.addEventListener('click', () => {
      this.timer = setInterval(this.startTimer, 100);
      this.initGame();
      this.checkFish();
    });


  }

  initGame(){
    this.field.init();
  }

  startTimer = () => {

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

  checkFish(){
    for(let answer of this.answers){
      answer.addEventListener('click', () => {
        answer.remove();
      });
    }
    for(let wrong of this.wrongs){
      wrong.addEventListener('click', () => {
        wrong.remove();
        this.minusHearts(this.i);
        this.i++;
       });
     } 
  }


}