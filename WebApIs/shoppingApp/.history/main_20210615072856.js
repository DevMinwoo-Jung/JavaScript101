const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');
const inputValue = document.querySelector('.input__box');
const removeBtn = document.querySelector('.fas.fa-trash');

inputBox.addEventListener('keyup', (e) => {
  if(e.key == 'Enter'){
   addPara();
  };
  
});

addButton.addEventListener('click', () => {
  addPara();
});

removeBtn.addEventListener('click', () => {
  console.log('잘와유')
})


/// functions
function addPara(){
  const newP = document.createElement('p');
  const newIcon = document.createElement('i');
  const newDiv = document.createElement('div');
  const currentP = document.querySelector('.item__list');

  if(inputValue.value == null 
    || inputValue.value == undefined 
    || inputValue.value == ''){
    return;
  } 

  newDiv.setAttribute('class', 'new__div');
  newIcon.setAttribute('class', 'fas fa-trash');

  currentP.appendChild(newDiv);
  newDiv.appendChild(newP);
  
  newP.textContent = inputValue.value;
  let addingP = document.querySelectorAll('.new__div');
  addingP[addingP.length-1].appendChild(newIcon);
  inputValue.value = '';

};

