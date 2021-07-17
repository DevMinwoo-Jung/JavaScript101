'use strict'

export default class StartGame {
  constructor(){
    this.startGameMessage = document.querySelector('.start--game-mssage');
    this.startGameBtn = document.querySelector('.start--btn');
  }

  startByPress(){
    this.startGameMessage.addEventListener('keydown', (event) => {
      console.log(event);
    });
  }
}