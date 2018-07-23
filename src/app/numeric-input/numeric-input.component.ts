import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.css']
})
export class NumericInputComponent implements OnInit {
  @Input() maxLength: number = 20;
  @Input() minLength: number = 0;
  @Input() placeholder: string = '--,--';
  @Input() pattern: string = '([0-9])|(,)|(arrow)|(space)';

  @Output() valueOut = new EventEmitter<string>();
  myForm: FormGroup;
  value: string;
  previusValue: string;
  patternValid;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'value': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.patternValid = new RegExp(this.pattern, 'i');
    if(!this.value) this.value = this.placeholder
  }

  validateKey(el: KeyboardEvent) {
    console.log(el);
    if (!el.key.match(this.patternValid)) {
      el.preventDefault();
    }
    // else {
    //   if(el.key === )
    //   this.previusValue = this.value;
    // }
    if (el.key === ',' && !this.value) this.value = '0';
    else if (el.key === 'Backspace')

    if(el.key.match(/d*/i))
  }

  ReplaceKey(el){
    if(this.previusValue && this.placeholder) {
      this.value = this.value.slice(0, el.target.selectionStart) + this.value.slice(el.target.selectionStart + 1);
      console.log(this.value, 'cambio');
      console.log(el.target.value);
      this.previusValue = '';
    }
    console.log('Caret at: ', el.target.selectionStart);
    console.log('value before' , this.previusValue);
  }
}
