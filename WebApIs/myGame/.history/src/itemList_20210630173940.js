'use strict'


export default class ItemList{
  constructor(){
    this.arrowBtn = document.querySelector('fas.fa-arrow-up');
    this.arrowBtn.addEventListener('click', (e) => {
      console.log(e, this.arrowBtn);
    })
  }
}