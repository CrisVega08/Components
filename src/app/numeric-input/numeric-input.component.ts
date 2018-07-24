import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.css']
})
export class NumericInputComponent implements OnInit {
  @Input() precision: number = 3;
  @Input() scale: number = 0;
  @Input() placeholder: string = '--,--';
  @Input() pattern: string = '([0-9])|(,)|(arrow)|(space)';

  @Output() valueOut = new EventEmitter<string>();

  myForm: FormGroup;
  value: string;
  previusValue;
  patternValid;
  patternScale;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'value': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.patternValid = new RegExp(this.pattern, 'i');
    this.patternScale = new RegExp(`[0-9]([0-9]{${this.scale}})$`);
  }

  validateKey(el: any) {
    console.log(el);
    if (!el.key.match(this.patternValid) ||
    ( this.previusValue
      && this.previusValue.length > this.precision - 1
      && (el.key !== 'Backspace' && el.key !== 'ArrowRight' && el.key !== 'ArrowLeft'))) {
      el.preventDefault();
    }
  }

  ReplaceKey(el) {
    this.previusValue = el.target.value.replace(/\D/g, '');
    el.target.value = this.scale > 0
      ? this.previusValue.replace(this.patternScale, '$1,$2')
                         .replace(/\B(?=(\d{3})+(?!\d),?)/g, '.')
      : this.previusValue.replace(/\B(?=(\d{3})+(?!\d),?)/g, '.');
  }
}

