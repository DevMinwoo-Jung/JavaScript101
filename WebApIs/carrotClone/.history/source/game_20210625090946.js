import * as sound from './sound.js'
import PopUp from './popup.js';
import Field from './filed.js';

'use strict'

const gameFinishBanner = new PopUp();
// const gameField = new Field(CARROT_COUNT, BUG_COUNT);


export default class GameZone {
  constructor(gameDuration, carrotCount, bugCount){
  
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
  
    this.gameBtn = document.querySelector('.game__button');
    this.gameTimer = document.querySelector('.game__timer');
    this.gameScore = document.querySelector('.game__score');

    this.started = false;
    this.score = 0;
    this.timer = undefined;

    this.gameField = new Field(carrotCount, bugCount);
    this.gameField.setClickListener(this.onItemClick);

    this.gameBtn.addEventListener('click', () =>{
      this.onClick && this.onClick();
      if(this.started) {
        this.stop();
      } else {
        this.start();
      }
    });

    }

    setGameStopListener(onGameStop) {
      this.onGameStop = onGameStop;
    }

    onItemClick = item =>{
      if(!this.started){
        return;
      }
      if(item === 'carrot'){
        this.score++;
        this.updateScoreBoard();
        if(score == CARROT_COUNT){
          this.finish(true);
        }
      } else if(item === 'bug'){
        // 벌레!!
        this.finish(false);
      }
    }


    start(){
      this.started = true;
      this.showStopButton();
      this.showTimerAndScore();
      this.startGameTimer();
      sound.playBackground(); 
    }
    
    stop(){
      this.started = false;
      this.stopGameTimer();
      this.hideGameButton();
      // gameFinishBanner.showWithText('REPLAY?');
      sound.playAlert();
      sound.stopBackground();
      this.onGameStop && this.onGameStop('cancle');
    }

    finish(win){
      this.started = false;
      this.hideGameButton();
      if(win){
        sound.playWin();
      }else {
        sound.playBug();
      }
      this.stopGameTimer();
      sound.stopBackground();
      // gameFinishBanner.showWithText(win? 'YOU WON' : 'YOU LOST');
      this.onGameStop && this.onGameStop(win? 'win' : 'lose');
    }

    initGame() {
      this.score = 0;
      this.gameScore.innerText = this.carrotCount;
      gameField.init();
    }
    
    stopGameTimer(){
      clearInterval(this.timer);
    }

    hideGameButton(){
      this.gameBtn.style.visibility = 'hidden';
    }

    showStopButton(){
        const icon = this.gameBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
        this.gameBtn.style.visibility = 'visible';
    }

    showTimerAndScore() {
      this.gameTimer.style.visibility = 'visible';
      this.gameScore.style.visibility = 'visible';
    }

    updateScoreBoard(){
      this.gameScore.innerText = this.carrotCount - this.score;
    }

    startGameTimer() {
      let remainingTimeSec = this.gameDuration;
      this.updateTimerText(remainingTimeSec);
      this.timer = setInterval(() => {
        if(remainingTimeSec <= 0){
          clearInterval(this.timer);
          this.finish(this.carrotCount === this.score);
          return;
        }
        this.updateTimerText(--remainingTimeSec);
      }, 1000);
    }

    updateTimerText(time){
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      this.gameTimer.innerText = `${minutes}:${seconds}`;
    }
}