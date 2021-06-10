const targetBox = document.querySelector('.box');
const target = document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  targetBox.style.marginLeft = String(x) + "px";
  targetBox.style.marginTop = String(y) + "px";
  console.log(x);
});


