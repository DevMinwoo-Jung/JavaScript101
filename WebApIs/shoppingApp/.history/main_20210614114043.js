const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');
let inputValue = document.querySelector('.input__box');
const newP = document.createElement('p');

inputBox.addEventListener('keyup', (e) => {
  if(e.key == 'Enter'){
   console.log(inputValue.value);
    inputValue.value = '';
  };
  
});

addButton.addEventListener('click', () => {
  console.log(inputValue.value);
  newP;
  document.createTextNode(inputValue.value);  
  inputValue = '';
});

