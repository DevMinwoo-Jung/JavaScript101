

'use strict'
import LvOneField from './levelOneField.js';

export default class MessageBox{
  constructor(){
    this.messageBox = document.querySelector('.messageBox');
    this.retryBtn = document.querySelector('.retry--btn'); 

    this.field = new LvOneField(answrCount, wrongCount);
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
    this.timerBar.style.backgroundColor = 'black';
    this.progressBar = 950;
    this.life = 3;
    this.i = 0;
    for(let i=0; i<3; i++){
    this.hearts[i].className = 'fas fa-heart';
    }
    this.removeFishes();
    this.moveFish = false;

  }
}

