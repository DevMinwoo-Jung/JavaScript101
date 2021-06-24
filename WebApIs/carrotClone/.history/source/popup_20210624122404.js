'use strict'

export default class PopUp {
  constructor(){
    this.popUp = document.querySelector('.pop-up');
    this.popUpText = document.querySelector('.pop-up__message');
    this.popUpRefresh = document.querySelector('.pop-up__refresh');
    this.popUpRefresh.addEventListener('click', () => {
      this.onClick && this.onClick();
      hide();
    });
  }

  setClickListener(onClick){
    this.onClick = onClick;
  }

  hide(){
    this.popUp.classList.add('pop-up--hide');
  }

  showWithText(text){
    this.PopUp.style.visibility = 'visible';
    this.PopUpText.innerText = text;
    this.PopUp.classList.remove('pop-up--hide');
  }
}