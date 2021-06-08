
let screenAvailWidth = window.screen.availWidth;
let screenAvailHeight = window.screen.availHeight;
let outerWidth = window.outerWidth;
let outerHeight = window.outerHeight;
let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;
let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;

function updateSize(){

  window.addEventListener('resize', () => {
document.querySelector('.screen').innerHTML = `screen: ${screenAvailWidth} ${screenAvailHeight}`;
document.querySelector('.outer').innerHTML = `outer: ${outerWidth} ${outerHeight}`;
document.querySelector('.inner').innerHTML = `inner: ${innerWidth} ${innerHeight}`;
document.querySelector('.document').innerHTML = `document: ${clientWidth, clientHeight}`;

});

};

updateSize();