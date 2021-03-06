// 어떤걸 구현할지 먼저 생각하기!!
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  console.log(text);
  // 2. 새로운 아이템을 만든다 (텍스트 + 삭제 버튼)
  const item = createItem();
  // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
  items.appendChild(item);
  // 4. input을 초기화 한다.
  input.value = '';
  input.focus();
}

function createItem() {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item');

  const span = document.createElement('span');
  span.setAttribute('class', 'item__name');
  span.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fas fa-plus"></i>'

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');
}

addBtn.addEventListener('click', () => {
  onAdd();
});