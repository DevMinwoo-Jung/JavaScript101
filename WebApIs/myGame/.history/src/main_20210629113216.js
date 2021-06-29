import Scroll from './scroll.js';

'use strict'

const scrollBtn = new Scroll();
console.log(scrollBtn);
scrollBtn.goToLevelTwo;
scrollBtn.goToLvThree;


// class Counter {
//   constructor(runEvery){
//     this.counter = 0;
//   }

//   increase(runIf5Times){
//     this.counter++;
//     console.log(this.counter);
//     if(this.counter % 5 === 0){
//       runIf5Times(this.counter);
//     }
//   }
// }

// const coolCounter = new Counter();
// function printSomething(num){
//   console.log(`Wow ${num}`);
// }

// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);
// coolCounter.increase(printSomething);

// 이렇게 하면 콜백함수를 정의하여 개발자가 하고 싶은데로 기능을 다양하게 할 수 있지만
// 함수를 호출할때마다 콜백을 해줘야 하므로 귀찮다!
// 그렇다면 어떻게 할까 아래를 보자

class Counter {
  constructor(runEveryFiveTimes){
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase(){
    this.counter++;
    console.log(this.counter);
    if(this.counter % 5 === 0){
      this.callback(this.counter);
    }
  }
}

const coolCounter = new Counter(printSomething);
function printSomething(num){
  console.log(`Wow ${num}`);
}

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
