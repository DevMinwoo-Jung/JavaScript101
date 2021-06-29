import Scroll from './scroll.js';

'use strict'

const scrollBtn = new Scroll();
console.log(scrollBtn);
scrollBtn.goToLevelTwo;
scrollBtn.goToLvThree;

// false: 0, -0, null, '', undefiend, Nan..
// true: -1 , 2 , 3, string,

if (true) {
  console.log('true!');
} else {
  console.log('false!');
}

num && console.log(num);
// num이 true이면 뒤에것을 실행할겨!
num || console.log(num);