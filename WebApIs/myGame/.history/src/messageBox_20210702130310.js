

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
    alert("야호")
    this.messageBox.classList.add('show');
  }
}