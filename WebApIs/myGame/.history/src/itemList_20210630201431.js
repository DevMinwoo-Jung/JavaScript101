'use strict'


export default class ItemList{
  constructor(){
    this.arrowBtn = document.querySelector('.fas.fa-arrow-up');
    this.items = document.querySelectorAll('.items');
    this.arrowBtn.addEventListener('click', () => {
      alert("안눌리니?");
      for(let item of this.items){
      console.log(item);
      }
    })
  }
}