

'use strict'
import {ItemType, LvOneField} from './levelOneField.js';

export default class MessageBox{
  constructor(){

    this.field = new LvOneField(2, 3);
    this.messageBox = document.querySelector('.messageBox');
    this.message = document.querySelector('.message');
    this.retryBtn = document.querySelector('.retry__btn'); 
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

  showWithText = text =>{
    this.message.innerText = text;
  }
}

