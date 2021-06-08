
let screenSize = document.querySelector('.screen');
let outerSize = document.querySelector('.outer');
let innerSize = document.querySelector('.inner');
let clientSize = document.querySelector('.document');

function updateSize(){

// 아래처럼 계속해서querySelector를 호출하는거는 나쁜 방법이다
// 또한 함수 안에서 변수를 선언하지 말고 함수 밖에서 선언하자
// window.addEventListener('resize', () => {
// document.querySelector('.screen').innerHTML = `screen: ${screenAvailWidth} ${screenAvailHeight}`;
// document.querySelector('.outer').innerHTML = `outer: ${outerWidth} ${outerHeight}`;
// document.querySelector('.inner').innerHTML = `inner: ${innerWidth} ${innerHeight}`;
// document.querySelector('.document').innerHTML = `document: ${clientWidth, clientHeight}`;

// });

screenSize.innerHTML = `screen ${window.availWidth}, ${window.availHeight}`;
outerSize.innerHTML = `outer ${window.outerWidth}, ${window.outerHeight}`;
innerSize.innerHTML = `inner ${window.innerWidth}, ${window.innerHeight}`;
clientSize.innerHTML = `document ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`


};

updateSize();