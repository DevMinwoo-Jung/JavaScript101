

'use strict'

export default class MessageBox{
  constructor(){
    this.messageBox = document.querySelector('.messageBox');
    this.retryBtn = document.querySelector('.retry--btn'); 
    this.retryBtn.addEventListener('click', () => {
      alert('클릭');
    })
  }

  show(){
    this.messageBox.classList.add('show');
  }
}