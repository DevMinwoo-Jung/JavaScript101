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
      this.toggleMessage();
    })
  }

  hide(){
      this.itemList.classList.toggle('hide');
      for(let item of this.items){
        item.classList.toggle('hide');
      }
      for(let fish of this.fishes){
        fish.classList.toggle('hide');
      }
  }

  toggleMessage(){
    if(this.itemList.className = 'item__lists'){
      this.list.innerText = 'Hide List';
    } else {
      this.list.innerText = 'Show List';
    }
  }

  
}