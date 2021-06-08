const screen = document.querySelector('.screen');

window.addEventListener('resize', () => {
// const screen = window.screen;
// const outerWidth = window.outerWidth;
// const outerHeight = window.outerHeight;
// const innerWidth = window.innerWidth;
// const innerHeight = window.innerHeight;
// const clientWidth = document.documentElement.clientWidth;
// const clientHeight = document.documentElement.clientHeight;

const screen = document.querySelector('.screen');
document.screen.innerHTML(`window.screen: ${window.screen}`);
const outerWidthAndHeight = window.outerWidth;
const innerWidthAndHeight = window.innerWidth;
const clientWidthAndHeight = document.documentElement.clientWidth;



});




