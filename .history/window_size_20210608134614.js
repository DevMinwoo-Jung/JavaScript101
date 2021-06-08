

window.addEventListener('resize', () => {
let screen = window.screen;
let outerWidth = window.outerWidth;
let outerHeight = window.outerHeight;
let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;
// let clientWidth = document.documentElement.clientWidth;
// let clientHeight = document.documentElement.clientHeight;

document.querySelectorAll('.screen').innerHTML = `screen: ${screen.availWidth, screen.availHeight}`;
document.querySelectorAll('.outer').innerHTML = `outer: ${outerWidth, outerHeight}`;
document.querySelectorAll('.inner').innerHTML = `inner: ${innerWidth, innerHeight}`;
// document.querySelector('document').innerHTML = `document: ${clientWidth, clientHeight}`;


});