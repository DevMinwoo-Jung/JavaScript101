'use strict'

export default class StartGame {
  constructor(){
    this.startGameBtn = document.querySelector('.start__btn');
  }

  startByClick(){
    this.startGameBtn.addEventListener('click', () => {
      this.startGameMessage.remove();
    })
  }

  
}