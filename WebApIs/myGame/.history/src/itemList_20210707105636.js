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
    })
  }

  hide(){
      this.itemList.classList.toggle('hide');
      this.hideItems();
      (function(){
        if(document.querySelector('.list') == 'Hide List'){
          document.querySelector('.list') = 'Show List';
        } else if (document.querySelector('.list') == 'Hide List'){
          document.querySelector('.list') = 'Hide List';
        } else {
          document.querySelector('.list') = 'Show List';
        }
      })();
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