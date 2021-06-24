'use strict'

export default class gameFiled {

  constructor(){
    this.field = document.querySelector('.game__field');
    this.fledRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', onFieldClick);
  }

  setClickListenr(onClick){
    this.onClick = onClick;
  }
}