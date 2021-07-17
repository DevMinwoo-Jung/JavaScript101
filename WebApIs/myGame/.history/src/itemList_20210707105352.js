'use strict'


export default class ItemList{
  constructor(){
    this.arrowBtn = document.querySelector('.fas.fa-arrow-up');
    this.fishes = document.querySelectorAll('.fish');
    this.itemList = document.querySelector('.item__lists');
    this.items = document.querySelectorAll('.item');
    this.itemBtn = document.querySelector('.item__btn');
    this.list = document.querySelector('.list');
    this.hideList = 'Hide List';
    this.showList = 'Show List';
    this.arrowBtn.addEventListener('click', () => {
      this.hide();
      (function(){
        if(this.itemList == this.hideList){
          this.itemList = this.showList;
        } else if (this.itemList == this.hideList){
          this.itemList = this.hideList;
        } else {
          this.itemList = this.showList;
        }
      })();
        })
  }

  hide(){
      this.itemList.classList.toggle('hide');
      this.hideItems();

  }


  hideItems(){
    for(let item of this.items){
      item.classList.toggle('hide');
    }
    for(let fish of this.fishes){
      fish.classList.toggle('hide');
    }
  }
}