

'use strict'
import {LvOneField} from './levelOneField.js';

export default class MessageBox{
  constructor(){
    this.messageBox = document.querySelector('.messageBox');
    this.retryBtn = document.querySelector('.retry--btn'); 

    this.field = new LvOneField();
    this.field.setClickListener(this.onItemClick);

    this.retryBtn.addEventListener('click', () => {
      this.setEventListener && this.setEventListener();
    })
  }

  show(){
    this.messageBox.classList.add('show');
  }

  setEventListener(setEventListener){
    this.setEventListener = setEventListener;
  }

  restart = () => {
    this.field.timerBar.style.width = '950px';
    messageBox.classList.remove('show');
    this.field.timerBar.style.backgroundColor = 'black';
    this.field.progressBar = 950;
    this.field.life = 3;
    this.field.i = 0;
    for(let i=0; i<3; i++){
    this.field.hearts[i].className = 'fas fa-heart';
    }
    this.field.removeFishes();
    this.field.moveFish = false;

  }
}

