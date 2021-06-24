
'use strict'
import * as sound from './sound.js'
import PopUp from './popup.js';
import Field from './filed.js';

const gameFinishBanner = new PopUp();
const gameField = new Field(CARROT_COUNT, BUG_COUNT);

export default class GameZone {
  constructor(){ 
  this.gameBtn = document.querySelector('.game__button');
  this.gameTimer = document.querySelector('.game__timer');
  this.gameScore = document.querySelector('.game__score');
    
  this.started = false;
  this.score = 0;
  this.timer = undefined;

  this.gameBtn.addEventListener('click', () =>{
    this.onClick && this.onClick();
    if(this.started) {
      alert("여기옴");
      this.stopGame();
    } else {
      alert("저기옴");
      this.startGame();
    }
  });

  }

  setClickListener(onClick){
    this.onClick = onClick;
  }

  startGame(){
    started = true;
    initGame();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
    sound.playBackground(); 
  }
  
  stopGame(){
    this.started = false;
    stopGameTimer();
    hideGameButton();
    gameFinishBanner.showWithText('REPLAY?');
    sound.playAlert();
    sound.stopBackground();
  }

  initGame() {
    score = 0;
    gameScore.innerText = CARROT_COUNT;
    gameField.init();
  }
  
  stopGameTimer(){
    clearInterval(timer);
  }

  hideGameButton(){
    this.gameBtn.style.visibility = 'hidden';
  }
}