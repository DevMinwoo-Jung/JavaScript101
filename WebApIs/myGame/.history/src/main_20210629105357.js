import Scroll from './scroll.js';

'use strict'

const scrollBtn = new Scroll();
console.log(scrollBtn);
scrollBtn.goToLevelTwo;
scrollBtn.goToLvThree;


function add(a, b){
  return a + b;
}
// 함수도 object 그래서 add는 함수를 가르키고 있는 reference를 가르키고 있다!
// // (a, b){
//   return a + b;
// } 이걸 가르키고 있다는 거임!!
// 그래서 밑의 것도 가능함
const doSomething = add;
console.log(doSomething(2, 10));
add(3, 4);

function surprise(operator){
  const result = operator(a , b);
  console.log(result);
}

surprise(add(3,4));