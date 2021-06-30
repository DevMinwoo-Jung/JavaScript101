'use strict'


export default class ItemList{
  constructor(){
    this.arrowBtn = document.querySelector('.fas.fa-arrow-up');
    this.itemList = document.querySelector('.item--lists');
    this.items = document.querySelector('.item');
    this.arrowBtn.addEventListener('click', () => {
      this.hide();
    })
  }

  hide(){
      this.itemList.classList.toggle('hide');

  }
}