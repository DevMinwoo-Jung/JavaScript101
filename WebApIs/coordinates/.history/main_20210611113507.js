const imgSize = document.querySelector('.imgSize');
const verticalLine = document.querySelector('.vertical');
const levelLine = document.querySelector('.levelLine');
const targetLocation = document.querySelector('.location');


document.addEventListener('mousemove', (e) => {
  // 좌표
  let x = e.clientX;
  let y = e.clientY;
  
  // 이미지 위치
  // imgSize.style.left = `${x}px`;
  // imgSize.style.top = `${y}px`;
  imgSize.style.transform = `translate(${x}px, ${y}px)`;
  
  
  // 수직위치
  verticalLine.style.left = `${x}px`;
  
  // 수평위치
  levelLine.style.top = `${y}px`;
  
  // 좌표 위치
  targetLocation.style.left = `${x}px`;
  targetLocation.style.top = `${y}px`;
  targetLocation.innerHTML = `X: ${x} Y: ${y}`;
  // innerText는 구버전에서 쓰는 것 이므로 쓰지말자!

});


