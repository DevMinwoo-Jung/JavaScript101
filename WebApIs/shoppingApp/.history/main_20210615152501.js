const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');
const addingP = document.querySelectorAll('.new__div');

inputBox.addEventListener('keyup', (e) => {
  console.log(`e${e.target}, cuT ${e.currentTarget}`);
  if(e.key == 'Enter'){
   addPara();
  };
  
});

addButton.addEventListener('click', (e) => {
  console.log(`e${e.target}, cuT ${e.currentTarget}`);
  addPara();
  inputBox.focus();
});

/// functions
function addPara(){
  const newP = document.createElement('p');
  const newIcon = document.createElement('i');
  const newDiv = document.createElement('div');
  const currentP = document.querySelector('.item__list');

  if(inputBox.value == null 
    || inputBox.value == undefined 
    || inputBox.value == ''){
    return;
  } 

  newDiv.setAttribute('class', 'new__div');
  newIcon.setAttribute('class', 'fas fa-trash');
  newIcon.setAttribute('id', 'removeBtn');


  currentP.appendChild(newDiv);
  newDiv.appendChild(newP);
  
  newP.textContent = inputBox.value;
  addingP[addingP.length-1].appendChild(newIcon);
  inputBox.value = '';

  removePara();
}

function removePara(){
  const removeBtn = document.querySelectorAll('.fas ');
  for(let i=0; i<removeBtn.length; i++){
    removeBtn[i].addEventListener('click', () => {
      addingP[i].remove();
    });
  }
}