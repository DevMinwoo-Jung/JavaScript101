'use strict'

export default class StartGame {
  constructor(){
    this.startGameMessage = document.querySelector('.start--screen');
    this.startGameBtn = document.querySelector('.start--btn');
  }

  // 추후에 해볼것...
  startByPress(){
    this.startGameMessage.addEventListener('keydown', (event) => {
      console.log(event);
    });
  }

  // startByClick(){
  //   this.startGameBtn.addEventListener('click', () => {
  //     this.startGameMessage.remove();
  //   })
  // }

  
}