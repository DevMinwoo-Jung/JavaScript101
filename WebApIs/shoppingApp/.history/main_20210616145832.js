const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');
const eventDiv = document.querySelector('.event__div');
const removeBtn = document.querySelectorAll('.fas fa-trash');

eventDiv.addEventListener('click', event => {
 if (event.target.className === 'add__Item'){
    console.log(event.target.className);
    addPara();
    inputBox.focus();
  } 
  if(event.target.className === 'fas fa-trash'){
    removeBtn.closest("div").remove();
  }
})

inputBox.addEventListener('keyup', (e) => {
  if(e.key == 'Enter'){
   addPara();
  };
  
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
  let addingP = document.querySelectorAll('.new__div');
  addingP[addingP.length-1].appendChild(newIcon);
  inputBox.value = '';


};
