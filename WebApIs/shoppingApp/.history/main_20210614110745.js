const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');

inputBox.addEventListener('keyup', (e) => {
  let inputValue = document.querySelector('.input__box').value;
  if(e.key == 'Enter'){
    console.log(inputValue);
    inputValue = '';
  };
  
});

addButton.addEventListener('click', () => {
  console.log('작동 잘함');
});

