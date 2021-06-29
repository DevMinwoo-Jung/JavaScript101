import Scroll from './scroll.js';

'use strict'

const scrollBtn = new Scroll();
console.log(scrollBtn);
scrollBtn.goToLevelTwo;
scrollBtn.goToLvThree;


class Counter {
  constructor(runEvery){
    this.Counter = 0;
  }

  increase(){
    this.Counter++;
    console.log(this.counter);
    if(this.counter % 5 === 0){
      runIf5Times(this.counter);
    }
  }
}

const coolCounter = new Counter();
function printSomething(num){
  console.log(`Wow ${num}`);
}

coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);