import Scroll from './scroll.js';
import StartGame from './startGame.js';

'use strict'

const scrollBtn = new Scroll();
const startGame = new StartGame();

console.log(scrollBtn);
scrollBtn.goToLevelTwo;
scrollBtn.goToLvThree;

onload = startGame.startByPress();


