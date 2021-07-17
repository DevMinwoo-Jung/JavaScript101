'use strict'


export default class ItemList{
  constructor(){
    this.arrowBtn = document.querySelector('.fas.fa-arrow-up');
    this.items = document.querySelectorAll('.item');
    this.arrowBtn.addEventListener('click', () => {
      this.addItem();
    })
  }

  addItem(){
    alert('야이야')
    for(let item of this.items){
      item.classList.add('.show');
      console.log(item);
    };
  }
}