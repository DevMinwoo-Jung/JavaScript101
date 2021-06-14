const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');
let inputValue = document.querySelector('.input__box');

inputBox.addEventListener('keyup', (e) => {
  if(e.key == 'Enter'){
   addPara();
  };
  
});

addButton.addEventListener('click', () => {
  addPara();
});

/// functions
function addPara(){
  const newP = document.createElement('p');
  const newIcon = document.createElement('i');
  const newDiv = document.createElement('div');
  const currentP = document.querySelector('.item__list');

  newIcon.setAttribute('class', 'fas fa-trash');

  currentP.appendChild(newP);
  newP.textContent = inputValue.value;
  let addingP = document.querySelectorAll('.item__list p');
  addingP[addingP.length-1].appendChild(newIcon);
  inputValue.value = '';
};

