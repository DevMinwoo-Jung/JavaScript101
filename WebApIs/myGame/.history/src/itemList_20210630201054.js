'use strict'


export default class ItemList{
  constructor(){
    this.arrowBtn = document.querySelector('.fas.fa-arrow-up');
    this.items = document.querySelectorAll('.item');
    this.arrowBtn.addEventListener('click', () => {
      this.items.classList.add('.item.show')
    })
  }
}