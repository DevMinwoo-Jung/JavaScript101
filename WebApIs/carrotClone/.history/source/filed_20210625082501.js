'use strict'
import * as sound from './sound.js'
const CARROT_SIZE = 80;

export default class Field {
  constructor(carrotCount, bugCount){
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector('.game__field');
    this.filedRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', this.onClick);
    // 자바스크립트에서 클래스의 정보를 this로 전달할경우
    // 그 클래스의 정보가 무시되기 때문에 무시하고 싶지 않다면
    // this 바인딩이라고 하는걸 쓰는데...
    // 1) this.onClick = this.onClick.bind(this) -- bad
    // 2) this.field.addEventListener('click', (event) => this.onClick)); 
    // 화살표 함수로! arrow function은 this가 유지된다
    // 3) onClick = event => {
    //   const target = event.target;
    //   if(target.matches('.carrot')){
    //     // 당근!!
    //     target.remove();
    //     sound.playCarrot();
    //     this.onItemClick && this.onItemClick('carrot');
    //   } else if(target.matches('.bug')){
    //     sound.playBug();
    //     this.onItemClick && this.onItemClick('bug');
    //     // 벌레!!
    //   }
    // }
  }

  setClickListener(a){
    this.a = a;
  }

  init(){
    this.field.innerHTML = '';
    // create bug and carrot 
    this._addItem('carrot', this.carrotCount, 'img/carrot.png');
    this._addItem('bug', this.bugCount, 'img/bug.png');
  }

  onClick = event =>{
    const target = event.target;
    if(target.matches('.carrot')){
      // 당근!!
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick('carrot');
    } else if(target.matches('.bug')){
      sound.playBug();
      this.onItemClick && this.onItemClick('bug');
      // 벌레!!

    }
  }

  // private 하게 만드려고
  _addItem(classNmae, count, imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = this.filedRect.width - CARROT_SIZE;
    const y2 = this.filedRect.height - CARROT_SIZE;
    for(let i = 0; i < count ; i ++){
      const item = document.createElement('img');
      item.setAttribute('class', classNmae);
      item.setAttribute('src', imgPath);
      item.style.position = 'absolute'
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);    
    }
  }

}


function randomNumber(min, max){
  return Math.random() * (max - min) + min;
}
