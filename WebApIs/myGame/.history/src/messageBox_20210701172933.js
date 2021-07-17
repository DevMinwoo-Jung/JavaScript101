

'use strict'

export default class MessageBox{
  constructor(){
    this.retryBtn = document.querySelector('.retry--btn'); 
    this.retryBtn.addEventListener('click', () => {
      alert('클릭');
    })
  }
}