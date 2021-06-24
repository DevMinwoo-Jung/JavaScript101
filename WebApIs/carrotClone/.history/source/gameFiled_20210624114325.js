'use strict'

export default class GameFieled {

  constructor(){
    this.field = document.querySelector('.game__field');
    this.fledRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', onFieldClick);
  }

  setClickListener(onClick){
    this.onClick = onClick;
  }
}