'use strict'


class ItemList{
  constructor(){
    this.arrowBtn = document.querySelector('fas fa-arrow-up');
    this.arrowBtn.addEventListener('click', (e) => {
      console.log(e);
    })
  }
}