

'use strict'


export default class MessageBox{
  constructor(){
    this.answers = document.querySelectorAll('.answer');
    this.wrongs = document.querySelectorAll('.wrong');
    this.messageBox = document.querySelector('.messageBox');
    this.retryBtn = document.querySelector('.retry--btn'); 
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
}

