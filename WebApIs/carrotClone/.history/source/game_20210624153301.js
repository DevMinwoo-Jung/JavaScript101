
'use strict'

export default class Game{
  constructor(){ 
  this.gameBtn = document.querySelector('.game__button');
  this.gameTimer = document.querySelector('.game__timer');
  this.gameScore = document.querySelector('.game__score');
  
  this.CARROT_COUNT = 5;
  this.BUG_COUNT = 5;
  this.GAME_DURATION_SEC = 5;
  this.started = false; this.score = 0; this.timer = undefined;
  }

}