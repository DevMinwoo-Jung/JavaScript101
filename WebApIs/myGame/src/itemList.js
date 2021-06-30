'use strict'


export default class ItemList{
  constructor(){
    this.arrowBtn = document.querySelector('.fas.fa-arrow-up');
    this.itemList = document.querySelector('.item--lists');
    this.items = document.querySelectorAll('.item');
    this.arrowBtn.addEventListener('click', () => {
      this.hide();
    })
  }

  hide(){
      this.itemList.classList.toggle('hide');
      for(let item of this.items){
        item.classList.toggle('hide');
      }
  }

  
}