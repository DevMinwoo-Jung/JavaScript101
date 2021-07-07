'use strict'


export default class ItemList{
  constructor(){
    this.arrowBtn = document.querySelector('.fas.fa-arrow-up');
    this.fishes = document.querySelectorAll('.fish');
    this.itemList = document.querySelector('.item__lists');
    this.items = document.querySelectorAll('.item');
    this.itemBtn = document.querySelector('.item__btn');
    this.list = document.querySelector('.list');
    this.arrowBtn.addEventListener('click', () => {
      this.hide();
    })
  }

  hide(){
      this.list.innerText = 'Show List';
      this.itemList.classList.toggle('hide');
      for(let item of this.items){
        item.classList.toggle('hide');
      }
      for(let fish of this.fishes){
        fish.classList.toggle('hide');
      }
  }

  
}