'use strict'

export default class StartGame {
  constructor(){
    this.startGameMessage = document.querySelector('.start--screen');
    this.startGameBtn = document.querySelector('.start--btn');
  }

  startByPress(){
    this.startGameMessage.addEventListener('keydown', (event) => {
      console.log(event);
    });
  }
  
}