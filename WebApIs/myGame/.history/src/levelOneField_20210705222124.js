'use strict'
const FISH_SIZE = 50;

export const ItemType = Object.freeze({
  answer: 'answer',
  wrong: 'wrong'
});

export class LvOneField{
  constructor(answrCount, wrongCount){
    this.answrCount = answrCount;
    this.wrongCount = wrongCount;

    this.fish = document.querySelector('.fish');
    this.answers = document.querySelectorAll('.answer');
    this.wrongs = document.querySelectorAll('.wrong');
    this.gameField = document.querySelector('.game--field');
    this.fieldRect = this.gameField.getBoundingClientRect();

    this.gameField.addEventListener('click', this.onClick);

  }

  setClickListener(onItemClick){
    this.onItemClick = onItemClick;
  }

  init(){
    this.fieldRect.innerHTML = '';
    this._addFishes('fish red answer', this.answrCount, 'img/redFish.png');
    this._addFishes('fish bigEyes answer', this.answrCount, 'img/bigEyes.png');
    this._addFishes('fish orange answer', this.answrCount, 'img/orangeFish.png');
    this._addFishes('fish red2 answer', this.answrCount, 'img/redFish2.png');
    this._addFishes('fish dirty answer', this.answrCount, 'img/dirtyFish.png');
    this._addFishes('fish orangeShark wrong', this.wrongCount, 'img/orangeShark.png');
    this._addFishes('fish orange2 wrong', this.wrongCount, 'img/orangeFish2.png');
    this._addFishes('fish bigEyes2 wrong', this.wrongCount, 'img/bigEyes2.png');
  }

  onClick = event =>{
    const target = event.target;
    
    if(target.matches('.answer')){
      target.remove();
      this.onItemClick && this.onItemClick(ItemType.answer);
    } else if(target.matches('.wrong')){
      target.remove();
      this.onItemClick && this.onItemClick(ItemType.wrong);

    }
  }

  
  _addFishes(className, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - FISH_SIZE;
    const y2 = this.fieldRect.height - FISH_SIZE;
    for(let i = 0; i < count ; i ++){
      const item = document.createElement('img');
      item.setAttribute('class', className);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute'
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.gameField.appendChild(item);    
    }
  }

  makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    let h = this.fieldRect.height - FISH_SIZE;
    let w = this.fieldRect.width - FISH_SIZE;
    let newHeight = Math.floor(Math.random() * h);
    let newWidth = Math.floor(Math.random() * w);
    
    return [newHeight,newWidth];    
    
  }

  animateFish() {
    for(let wrong of document.querySelectorAll('.wrong')){
      // let newq = this.makeNewPosition();
      // let oldq = wrong.getBoundingClientRect();
      let currX = wrong.getBoundingClientRect().x;
      let currY = wrong.getBoundingClientRect().y;
      
      let newX = wrong.getBoundingClientRect().x = Math.random() * 1400;
      let newY = wrong.getBoundingClientRect().y = Math.random() * 450;
      console.log(`new ${newX}, ${newY}`);
      console.log(`curr ${currX}, ${currY}`);
      // let speed = this.calcSpeed([oldq.top, oldq.left], newq);

      // wrong.animate([
      //   { x: currX, y: currY}
      //   ,{x: newX, y: newY}], 
      //   {
      //     iterations: Infinity
      //   });
      //   }

    //     wrong.animate([
    //       {transfrom: `translateX(${currX}px), translateY(${currY}px)`}
    //       ,{transfrom: `translateX(${newX}px), translateY(${newY}px)`}], 
    //       {
    //         iterations: Infinity,
    //         duration: 10
    //       });
    // }  
    wrong.animate([
      {transfrom: `translateX(${currX}px), translateY(${currY}px)`}
      ,{transfrom: translateX(200), transfrom:translateY(300)}], 
      {
        iterations: Infinity,
        duration: 10
      });
}
    // for(let answer of this.answers){
    //   answer.animate([
    //     // keyframes
    //     { transform: 'translateY(0px)' },
    //     { transform: 'translateY(-300px)' }
    //   ], {
    //     // timing options
    //     duration: 1000,
    //     iterations: Infinity
    //   });
    // };

    // console.log(document.querySelectorAll('.wrong'));

    // for(let i=0; i<this.wrongs.length; i++){
    //   console.log(document.querySelectorAll('.wrong')[i]);
    // }

    // for(let wrong of document.querySelectorAll('.wrong')){
    //   console.log(wrong);
    //   console.log('자 이제 움직입니다잉');
    //   console.log(this.wrongs);
    //   wrong.animate([
    //     // keyframes
    //     { transform: 'translateX(0px)' },
    //     { transform: 'translateX(-1800px)' },
    //     { transform: 'translateY(0px)' },
    //     { transform: 'translateY(-550px)' }
    //   ], {
    //     // timing options
    //     duration: 1000,
    //     iterations: Infinity
    //   });
    // };
    
  }

  calcSpeed(prev, next) {
    
    let x = Math.abs(prev[1] - next[1]);
    let y = Math.abs(prev[0] - next[0]);
    let greatest = x > y ? x : y;
    let speedModifier = 0.1;
    let speed = Math.abs(Math.ceil(greatest/speedModifier));

    return speed;

  }
}

function randomNumber(min, max){
  return Math.random() * (max - min) + min;
}