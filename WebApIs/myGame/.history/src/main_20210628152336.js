import Scroll from './scroll.js';

'use strict'

const scrollBtn = new Scroll();
console.log(scrollBtn);

scrollBtn.setClickListener(() => {
 scrollBtn.goToLevelTwo;
 scrollBtn.goToLvThree;
})
