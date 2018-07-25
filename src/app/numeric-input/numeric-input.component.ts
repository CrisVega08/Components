import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.css']
})
export class NumericInputComponent implements OnInit {
  @Input() precision: number = 9;
  @Input() scale: number = 2;
  @Input() pattern: string = '([0-9])|(,)|(arrow)|(space)';

  @Output() valueOut = new EventEmitter<string>();

  myForm: FormGroup;
  value;
  previusValue;
  patternValid;
  splitValue = [];
  flagDecimal = false;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'value': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.patternValid = new RegExp(this.pattern, 'i');
    console.log('patter', this.patternValid);
    // this.patternScale = new RegExp(`([0-9])([0-9]{${this.scale}})$`);
    // console.log('Scale', this.patternScale);
  }

  validateKey(el: any) {
    console.log(el, 'elemento');
    if (!el.key.match(this.patternValid) || (this.previusValue && this.previusValue.length > this.precision )
        && (el.key !== 'Backspace' && el.key !== 'ArrowRigth' && el.key !== 'ArrowLeft')) {
      el.preventDefault();
    }
    if ( el.key === ',' && (this.flagDecimal || this.scale === 0) ) {
      el.preventDefault();
    }
  }

  ReplaceKey(el) {

    this.divideNumber(el.target.value);
    el.target.value = this.checkDecimal();
    this.previusValue = el.target.value.replace(/\D/g, '');

    // this.previusValue = el.target.value.replace(/\D/g, '');
    // console.log('this.prevuisValue', this.previusValue);
    // el.target.value = this.scale > 0
    //   ? this.previusValue.replace(this.patternScale, '$1,$2')
    //                      .replace(/\B(?=(\d{3})+(?!\d),?)/g, '.')
    //   : this.previusValue.replace(/\B(?=(\d{3})+(?!\d),?)/g, '.');
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

  divideNumber(value) {
    this.splitValue = value.split(',');
    this.flagDecimal = this.splitValue.length === 1 ?  false : true;
  }

  checkDecimal() {
    let newValue;
    const value = this.splitValue[0].replace(/\D/g, '')
                                    .replace(/\B(?=(\d{3})+(?!\d),?)/g, '.');
    if ( this.flagDecimal && this.splitValue[1].length >= 0) {
      if (this.splitValue[1].length <= this.scale) {
        newValue = value.concat(',').concat(this.splitValue[1]);
      } else {
        newValue =  value.concat(',').concat(this.splitValue[1].substring(0, this.scale));
      }
    } else {
      newValue = value;
    }
    return newValue;
  }

  checkValue(value) {
    value = Number(value.replace(/\./g, '').replace(/,/g, '.'));
    console.log(value, 'valor a enviar');
  }
}

