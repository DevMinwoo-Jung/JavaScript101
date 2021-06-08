

window.addEventListener('resize', () => {
let screen2 = window.screen;
// const outerWidth = window.outerWidth;
// const outerHeight = window.outerHeight;
// const innerWidth = window.innerWidth;
// const innerHeight = window.innerHeight;
// const clientWidth = document.documentElement.clientWidth;
// const clientHeight = document.documentElement.clientHeight;

let screen = document.querySelector('.screen');
screen.innerHTML = `window.screen: ${screen2}`;
const outerWidthAndHeight = window.outerWidth;
const innerWidthAndHeight = window.innerWidth;
const clientWidthAndHeight = document.documentElement.clientWidth;



});

console.log(screen);


