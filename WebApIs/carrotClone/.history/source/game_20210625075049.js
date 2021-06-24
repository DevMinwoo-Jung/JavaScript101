
'use strict'
import * as sound from './sound.js'
import PopUp from './popup.js';

const gameFinishBanner = new PopUp();

export default class GameZone {
  constructor(){ 
  this.gameBtn = document.querySelector('.game__button');
  this.gameTimer = document.querySelector('.game__timer');
  this.gameScore = document.querySelector('.game__score');
    
  this.started = false;
  this.score = 0;
  this.timer = undefined;

  this.gameBtn.addEventListener('click', () =>{
    if(this.started) {
      alert("여기옴");
      stopGame();
    } else {
      alert("저기옴");
      startGame();
    }
  });

  }
  
  stopGame(){
    this.started = false;
    stopGameTimer();
    hideGameButton();
    gameFinishBanner.showWithText('REPLAY?');
    sound.playAlert();
    sound.stopBackground();
  }

  
  stopGameTimer(){
    clearInterval(timer);
  }

  hideGameButton(){
    this.gameBtn.style.visibility = 'hidden';
  }
}