const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');

inputBox.addEventListener('keyup', (e) => {
  let inputValue = document.querySelector('.input__box').nodeValue;
  if(e.key == 'Enter'){
    console.log(inputValue);
  }
  
});

addButton.addEventListener('click', () => {
  console.log('작동 잘함');
});

