import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { validateRange } from '../validators/customValidator';

@Component({
  selector: 'app-tecnicos',
  templateUrl: 'tecnicos.template.html',
  styleUrls: ['tecnicos.style.css']
})
export class TecnicosComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chis', 'Anna']

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailAsync.bind(this)),
      }),
      'identification': new FormControl('12345', [Validators.required, validateRange]),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    /** subscipción a l cambio de valores */
    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    /** Subscripción al status*/

    // this.signupForm.statusChanges.subscribe((change) => {
    //   console.log(change);
    // });

    /** Setear todo el formulario con valores de prueba */
    // this.signupForm.setValue({
    //   userData: {
    //     userName : 'Cristian',
    //     email: 'cristian.vega08@gmail.com'
    //   },
    //   gender: 'male',
    //   hobbies: []
    // });

    /** Solo poner ciertos valores por defecto no todos */
    this.signupForm.patchValue({
      userData: {
        username: 'Yk'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean } {
    // response of function { nameIsForbidden: true }
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true  };
    }
    return null;
  }

  forbiddenEmailAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if ( control.value === 'test@test.com') {
          resolve({'emialIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
