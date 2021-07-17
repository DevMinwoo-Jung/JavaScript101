'use strict'

export default class LvOneField{
  constructor(){
    this.fishes = document.querySelectorAll('.fish');
    this.fish = document.querySelector('.fish');
    // this.fish.addEventListener('click', (event) => {
    //    if(Array.from(this.fishes).indexOf(this.fish)){
    //      alert("짜잔");
    //    }
    // })
  }

  checkFish(){
    for(let fish of this.fishes){
      fish.addEventListener('click', () => {
       // console.log(Array.from(this.fishes).indexOf(this.fish));
     //   console.log(Array.from(this.fishes).includes(this.fish));
        console.log(this.fishes);
        console.log(this.fish.className);
        
        if(this.fishes.className = 'wrong'){
          alert("짜잔");
        } else {
          alert("안짜잔");
        }
      })
    }
  }
}