'use strict'
import MessageBox from './messageBox.js';
import {ItemType, LvOneField} from './levelOneField.js';


export const Reason = Object.freeze({
  win: 'win',
  lose: 'lose',
});

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

    this.startGameBtn = document.querySelector('.start--btn');
    this.timerBar = document.querySelector('.timer--bar');
    this.hearts = document.querySelectorAll('.fa-heart');
    this.answers = document.querySelectorAll('.answer');
    this.wrongs = document.querySelectorAll('.wrong');
    this.fish = document.querySelector('.fish');
    this.gameScore = document.querySelector('.game__score');
    this.startScreen = document.querySelector('.levelOne');

    this.timer;
    this.life = 3;
    this.i = 0;
    this.score = 0;

    this.field = new LvOneField(answrCount, wrongCount);
    this.field.setClickListener(this.onItemClick);

    this.startGameBtn.addEventListener('click', () => {
      this.initGame();
    });

    // this.startBtn.addEventListener('click', () =>{
    //   this.initGame();
    // })


  }

  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
  }

  onItemClick = item =>{
    if(item === ItemType.answer){
      this.updateScoreBoard();
      if(document.querySelectorAll('.answer').length == 0){
        this.gameOver(Reason.win);
      };
    } else if(item === ItemType.wrong){
      this.minusHearts(this.i);
      this.i++;
      console.log(this.i);
    }
  }

  initGame(){
    this.field.init();
    this.timer = setInterval(this.startTimer, 100);
    this.field.animateFish();
    this.timerBar.style.transition = 'all 0.2s ease-in';
  }

  startTimer = () => {
    if(this.progressBar > 0){
      this.timerBar.style.width = this.progressBar - this.minusTimeBar +'px';
      this.progressBar = this.progressBar - this.minusTimeBar;
      this.barColorChange();
    } else if (this.progressBar <= 0) {
      this.gameOver();
    } 
  }

  gameOver(reason){
    messageBox.show();
    this.stopTimer();

    this.onGameStop && this.onGameStop(reason);
  }

  barColorChange(){
    if(this.timerBar.style.width < '150px'){
      this.timerBar.style.backgroundColor = 'red';
    }
  }

  stopTimer() {
      clearInterval(this.timer);  
  }

  reset = () => {
    this.timerBar.style.width = '450px';
    messageBox.messageBox.classList.remove('show');
    this.timerBar.style.backgroundColor = 'black';
    this.timerBar.style.transition = " ";
    this.progressBar = 450;
    this.life = 3;
    this.i = 0;
    this.refillHearts();
    this.resetScoreBoard();
    this.removeFishes();
  }

  minusHearts = (i) => {
    this.hearts[i].className = 'fas fa-heart-broken';
    this.life--;
    if (this.life == 0){
    this.gameOver(Reason.lose);
    }
  }

  checkFish(){
    for(let answer of this.answers){
      answer.addEventListener('click', () => {
        answer.remove();
      });
    };
    for(let wrong of this.wrongs){
      wrong.addEventListener('click', () => {
        wrong.remove();
        this.minusHearts(this.i);
        this.i++;
      });
    }; 
  }

  removeFishes(){
    for(let answer of document.querySelectorAll('.answer')){
        answer.remove();
      };
    for(let wrong of document.querySelectorAll('.wrong')){
        wrong.remove();
      };
    }
    
  updateScoreBoard(){
    this.gameScore.innerText = ++this.score;
  }
  resetScoreBoard(){
    this.gameScore.innerText = 0;
    this.score = 0;
  }
  refillHearts(){
    for(let i=0; i<3; i++){
      this.hearts[i].className = 'fas fa-heart';
      };
  }


}





