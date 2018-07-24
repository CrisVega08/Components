import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.css']
})
export class NumericInputComponent implements OnInit {
  @Input() precision: number = 9;
  @Input() scale: number = 0;
  @Input() pattern: string = '([0-9])|(,)|(arrow)|(space)';

  @Output() valueOut = new EventEmitter<string>();

  myForm: FormGroup;
  value;
  previusValue;
  patternValid;
  patternScale;
  slipeVale;
  flagDecimal = false;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'value': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.patternValid = new RegExp(this.pattern, 'i');
    console.log('patter', this.patternValid);
    this.patternScale = new RegExp(`([0-9])([0-9]{${this.scale}})$`);
    console.log('Scale', this.patternScale);
  }

  validateKey(el: any) {
    console.log(el);
    if (!el.key.match(this.patternValid) || this.previusValue.length > this.precision
        && (el.key !== 'Backspace' && el.key !== 'ArrowRigth' && el.key !== 'ArrowLeft')) {
      el.preventDefault();
      console.log('prevent');
    }
    if ( el.key === ',' && !this.flagDecimal ) {
      this.flagDecimal = true;
    }
  }

  ReplaceKey(el) {
    
    

    this.previusValue = el.target.value.replace(/\D/g, '');
    console.log(el.target);
    console.log('this.prevuisValue', this.previusValue);
    el.target.value = this.scale > 0
      ? this.previusValue.replace(this.patternScale, '$1,$2')
                         .replace(/\B(?=(\d{3})+(?!\d),?)/g, '.')
      : this.previusValue.replace(/\B(?=(\d{3})+(?!\d),?)/g, '.');
      // ^\d+(?:[,]\d+)?$

  //   if(this.previusValue && this.placeholder) {
  //     this.value = this.value.slice(0, el.target.selectionStart) + this.value.slice(el.target.selectionStart + 1);
  //     console.log(this.value, 'cambio');
  //     console.log(el.target.value);
  //     this.previusValue = '';
  //   }
  //   console.log('Caret at: ', el.target.selectionStart);
  //   console.log('value before' , this.previusValue);
  // }
  }

  putDecimal(el){

  }

  numberF(value) {
    this.slipeVale = value.split(',');
    // console.log(this.splp)
  }
}

