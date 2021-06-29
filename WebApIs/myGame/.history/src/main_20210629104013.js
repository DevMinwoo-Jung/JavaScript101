import Scroll from './scroll.js';

'use strict'

const scrollBtn = new Scroll();
console.log(scrollBtn);
scrollBtn.goToLevelTwo;
scrollBtn.goToLvThree;

const num = 1
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result1 = num3 + num4
// 이렇게 계속 코드를 쓰면 귀찮고 유지보수 어려움
// 그래서 함수를 쓰는 것

function add(a, b){
  return a + b;
}

add(3, 4);