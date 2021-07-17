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
    for(let item of this.items){
      item.classList.toggle('hide');
      console.log(item);
    };
  }
}