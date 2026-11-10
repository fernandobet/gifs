import { Component, output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  imports: [],
  templateUrl: './input-search.html',
})
export class InputSearch {

  inputSearchValue = output<string>();

  enterCommand(input:HTMLInputElement){
    if(!input.value.trim())return;

    this.inputSearchValue.emit(input.value);
    input.value='';
  }
}
