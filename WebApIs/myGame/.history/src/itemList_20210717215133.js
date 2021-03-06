'use strict'


export default class ItemList{
  constructor(){
    this.arrowBtn = document.querySelector('.fas.fa-arrows-alt-v');
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
      this.itemList.classList.toggle('hide');
      this.hideItems();
      this.toggleMesage();
  }


  hideItems(){
    for(let item of this.items){
      item.classList.toggle('hide');
    }
    for(let fish of this.fishes){
      fish.classList.toggle('hide');
    }
  }

  toggleMesage(){
    (function(){
      if(document.querySelector('.list').innerText == 'Hide List'){
        document.querySelector('.list').innerText = 'Show List';
      } else if (document.querySelector('.list').innerText == 'Show List'){
        document.querySelector('.list').innerText = 'Hide List';
      } else {
        document.querySelector('.list').innerText = 'Show List';
      }
    })();
  }

}