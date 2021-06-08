
let screenSize = document.querySelector('.screen');
let screenAvailHeight = window.screen.availHeight;
let outerWidth = window.outerWidth;
let outerHeight = window.outerHeight;
let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;
let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;

function updateSize(){

// 아래처럼 계속해서querySelector를 호출하는거는 나쁜 방법이다
// 또한 함수 안에서 변수를 선언하지 말고 함수 밖에서 선언하자
// window.addEventListener('resize', () => {
// document.querySelector('.screen').innerHTML = `screen: ${screenAvailWidth} ${screenAvailHeight}`;
// document.querySelector('.outer').innerHTML = `outer: ${outerWidth} ${outerHeight}`;
// document.querySelector('.inner').innerHTML = `inner: ${innerWidth} ${innerHeight}`;
// document.querySelector('.document').innerHTML = `document: ${clientWidth, clientHeight}`;

// });

screenSize.innerHTML = `screen ${screen.availWidth}, ${screen.availHeight}`;


};

updateSize();