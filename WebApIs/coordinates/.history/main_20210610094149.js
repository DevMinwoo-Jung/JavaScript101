const targetBox = document.querySelector('.box');
const target = document.addEventListener('mousemove', (e) => {
  let x = e.screenX;
  let y = e.screenY;
  targetBox.style.left = String(x);
  targetBox.style.right = String(y);
  console.log(x);
  console.log(typeof x);
});


