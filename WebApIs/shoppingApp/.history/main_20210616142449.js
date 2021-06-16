const addButton = document.querySelector('.addItem');
const inputBox = document.querySelector('.input__box');
const eventDiv = document.querySelector('.event__div');

eventDiv.addEventListener('click', event => {
  console.log(event.target.className);
  if(event.target.className !== 'add__Item'){
    return;
  } else if (event.target.className === 'add__Item'){
    addPara();
    inputBox.focus();
  } else if (event.target.className === 'fas fa-trash'){
    alert("왜 여기 안옴");
  }
})

inputBox.addEventListener('keyup', (e) => {
  if(e.key == 'Enter'){
   addPara();
  };
  
});

// addButton.addEventListener('click', (e) => {
//   console.log(`e ${e.target}, cuT ${e.currentTarget}`);
//   addPara();
//   inputBox.focus();
// });

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

  const removeBtn = document.querySelectorAll('.fas fa-trash');
  
  for(let i=0; i<removeBtn.length; i++){
    // removeBtn[i].addEventListener('click', () => {
    //   addingP[i].remove();
    // });
    addingP[i].remove();
  }

};
