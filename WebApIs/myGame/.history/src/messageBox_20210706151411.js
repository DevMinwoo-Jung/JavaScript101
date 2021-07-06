

'use strict'


export default class MessageBox{
  constructor(){
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

