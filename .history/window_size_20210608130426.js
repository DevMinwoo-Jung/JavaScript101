const screen = document.querySelector('.screen');

document.addEventListener('scroll', () => {

  console.log(window.screen);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(document.documentElement.clientWidth);
  console.log(document.documentElement.clientHeight);
});




