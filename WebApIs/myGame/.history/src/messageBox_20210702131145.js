

'use strict'

import LevelOne from './levelOne.js';

const levelOne = new LevelOne();

export default class MessageBox{
  constructor(){
    this.messageBox = document.querySelector('.messageBox');
    this.retryBtn = document.querySelector('.retry--btn'); 
    this.retryBtn.addEventListener('click', () => {
      
    })
  }

  show(){
    this.messageBox.classList.add('show');
  }
}