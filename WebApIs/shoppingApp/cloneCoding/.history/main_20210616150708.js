// 어떤걸 구현할지 먼저 생각하기!!
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');


// 아래처럼 코드를 섦여하는 주석은 공부할떄만 쓰고 일할떄는 필요없다!
// 가능하면 이 코드를 왜 이렇게 작성했는지 써라!

function onAdd(){
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if(text === ''){
    input.focus();
    return;
  }
  console.log(text);
  // 2. 새로운 아이템을 만든다 (텍스트 + 삭제 버튼)
  const item = createItem(text);
  // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
  items.appendChild(item);
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block: 'center'});
  // 5. input을 초기화 한다.
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  // const item = document.createElement('div');
  // item.setAttribute('class', 'item');

  // const name = document.createElement('span');
  // name.setAttribute('class', 'item__name');
  // name.innerText = text;

  // const deleteBtn = document.createElement('button');
  // deleteBtn.setAttribute('class', 'item__delete');
  // deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  // deleteBtn.addEventListener('click', () =>{
  //   items.removeChild(itemRow);
  // })

  // const itemDivider = document.createElement('div');
  // itemDivider.setAttribute('class', 'item__divider');

  // item.appendChild(name);
  // item.appendChild(deleteBtn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivider);

  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if(event.key === 'Enter'){
    onAdd();
  }
});