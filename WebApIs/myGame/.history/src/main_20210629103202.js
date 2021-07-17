import Scroll from './scroll.js';

'use strict'

const scrollBtn = new Scroll();
console.log(scrollBtn);
scrollBtn.goToLevelTwo;
scrollBtn.goToLvThree;

let number = 2;
let number2 = number;

console.log(number); // 2
console.log(number2); // 2

number = 3;

console.log(number); // 3
// number2 값이 3이 될거 같지만 그대로 2이다. 이유는 잘 기억 안난당...
console.log(number2); // 2


const obj = {
  name: 'ellie',
  age: 5
};

console.log(obj.name); // ellie
const obj2 = obj;
obj2.name = 'minwoo';
console.log(obj.name); // minwoo
console.log(obj2.name); // miwnoo