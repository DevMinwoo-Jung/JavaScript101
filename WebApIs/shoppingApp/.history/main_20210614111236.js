const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');

inputBox.addEventListener('keyup', (e) => {
  if(e.key == 'Enter'){
    let inputValue = document.querySelector('.input__box');
    console.log(inputValue.value);
    inputValue.textContent = ' ';
  };
  
});

addButton.addEventListener('click', () => {
  console.log('작동 잘함');
});

