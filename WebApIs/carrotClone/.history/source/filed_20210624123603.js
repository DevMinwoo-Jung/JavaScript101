'use strict'

const carrotSound = new Audio('./sound/carrot_pull.mp3');

export default class Field {
  constructor(carrotCount, bugCount){
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector('.game__field');
    this.filedRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', this.onClick);
  }

  setClickListener(onItemClick){
    this.onItemClick = onItemClick;
  }

  init(){
    this.field.innerHTML = '';
    // create bug and carrot 
    this._addItem('carrot', CARROT_COUNT, 'img/carrot.png');
    this._addItem('bug', BUG_COUNT, 'img/bug.png');
  }

  onClick(event){
    const target = event.target;
    if(target.matches('.carrot')){
      // 당근!!
      playSound(carrotSound);
      this.onItemClick && this.onItemClick('carrot');
    } else if(target.matches('.bug')){
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


function playSound(sound){
  sound.currentTime = 0;
  sound.play();
}

