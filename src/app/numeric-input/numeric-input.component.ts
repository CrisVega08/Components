import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.css']
})
export class NumericInputComponent implements OnInit {
  @Input() precision: number = 10;
  @Input() scale: number = 2;
  @Input() pattern: string = '([0-9])|(,)|(arrow)|(space)';

  @Output() valueOut = new EventEmitter<string>();

  myForm: FormGroup;
  value = '';
  previusValue;
  patternValid;
  splitValue = [];
  flagDecimal = false;
  keydownValue = '';
  decimalValue;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'value': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.patternValid = new RegExp(this.pattern, 'i');
  }

  validateKey(el: any) {
    if (!el.key.match(this.patternValid) || (this.previusValue && this.previusValue.length >= this.precision )
    && (el.key !== 'Backspace' && el.key !== 'ArrowRight' && el.key !== 'ArrowLeft')) {
      el.preventDefault();
    }
    if ( el.key === ',' && (this.flagDecimal || this.scale === 0) ) {
      el.preventDefault();
    }
    this.keydownValue = (this.value && this.value.length > 0) ? this.value.replace(/\D/g, '') : '';
  }

  ReplaceKey(el) {
    this.divideNumber(el.target.value);
    el.target.value = this.checkDecimal();
    this.previusValue = el.target.value.replace(/\D/g, '');
    this.choosePosition(el);
  }

  choosePosition(el) {
    let sumValue = 0;
    let cursorPosition;
    const numberDot = el.target.value.split('.').length - 1;

    if ( (this.previusValue !== this.keydownValue) && (this.previusValue.length > 1) ) {
      for (let i = 0; i < this.previusValue.length; i++) {
        if (this.previusValue.charAt(i) !== this.keydownValue.charAt(i)) {
          sumValue = this.previusValue.length > this.keydownValue.length ? i + 1 : i;
          if (this.flagDecimal) {
            cursorPosition = this.previusValue.length - Number(this.splitValue[1].length) - (i + 1);
            cursorPosition >= 0
              ? this.setPosition(el, sumValue + numberDot - Math.trunc(cursorPosition / 3))
              : this.setPosition(el, sumValue + 1 + numberDot);
          } else {
              cursorPosition = this.previusValue.length - (i + 1) ;
              this.setPosition(el, sumValue + numberDot - Math.trunc(cursorPosition / 3));
          }
          break;
        }
      }
    }
  }

  setPosition(el, value) {
    el.target.selectionEnd = value;
    el.target.selectionStart = value;
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
        this.splitValue[1] = this.splitValue[1].substring(0, this.scale);
        newValue =  value.concat(',').concat(this.splitValue[1]);
      }
    } else {
      newValue = value;
    }
    return newValue;
  }

  checkValue(target) {
    let value = target.value;
    this.divideNumber(value);
    if (this.flagDecimal && this.splitValue[1].length === 0) {
      value = value.concat('0');
    }
    if (this.splitValue[0].length === 0) {
      value = '0'.concat(value);
    }
    this.value = value;
    value = Number(value.replace(/\./g, '').replace(/,/g, '.'));

    console.log('valor a emitir', value);
  }
}

