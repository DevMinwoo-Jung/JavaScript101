

'use strict'


export default class MessageBox{
  constructor(){

    this.messageBox = document.querySelector('.messageBox');
    this.message = document.querySelector('.message');
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

  showWithText = text =>{
    this.message.innerText = text;
    // this.popUp.classList.remove('pop-up--hide');
    // this.popUp.style.visibility = 'visible';
  }
}

