

'use strict'
import LevelOne from './levelOne.js';

export default class MessageBox{
  constructor(){
    this.messageBox = document.querySelector('.messageBox');
    this.retryBtn = document.querySelector('.retry--btn'); 
    this.retryBtn.addEventListener('click', () => {
      levelOne.restart();
    })
  }

  show(){
    this.messageBox.classList.add('show');
  }
}

