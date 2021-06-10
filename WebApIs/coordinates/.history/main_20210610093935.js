const targetBox = document.querySelector('.box');
const target = document.addEventListener('mousemove', (e) => {
  let x = e.screenX;
  let y = e.screenY;
  targetBox.style.left = x;
  targetBox.style.right = y;
  
});


