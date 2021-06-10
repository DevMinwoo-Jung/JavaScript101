const targetBox = document.querySelector('.box');
const verticalRLine = document.querySelector('.verticalRight');
const verticalLLine = document.querySelector('.verticalLeft');

const target = document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  targetBox.style.marginLeft = String(x) + "px";
  targetBox.style.marginTop = String(y) + "px";
  verticalRLine.style.marginLeft = String(x) + "px";
  verticalRLine.style.marginTop = String(y) + "px";
  verticalLLine.style.marginLeft = -(String(x) + "px");
  verticalLLine.style.marginTop = String(y) + "px";

  console.log(x);
});


