
'use strict'

export default class GameZone{
  constructor(){ 
  this.gameBtn = document.querySelector('.game__button');
  this.gameTimer = document.querySelector('.game__timer');
  this.gameScore = document.querySelector('.game__score');
  
  this.gameBtn.addEventListener('click', () =>{
    if(started) {
      alert("여기옴");
      stopGame();
    } else {
      alert("저기옴");
      startGame();
    }
    
  });

  }

}