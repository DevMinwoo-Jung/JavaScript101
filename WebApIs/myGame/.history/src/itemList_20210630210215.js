'use strict'


export default class ItemList{
  constructor(){
    this.arrowBtn = document.querySelector('.fas.fa-arrow-up');
    this.items = document.querySelector('.item--lists');
    this.arrowBtn.addEventListener('click', () => {
      this.hide();
    })
  }

  hide(){
      items.classList.toggle('hide');
      console.log(item);
  }
}