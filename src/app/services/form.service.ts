import { Injectable } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MasterService } from '../interfaces/mastr-services.interface';

@Injectable()
export class FormService {
form: FormGroup;

  constructor() { }

  // createForm() {
  //   console.log('aquí va a ir el formaulario');
  // }

  static formToCreate(tableFields: MasterService['tableFields'], register?: object, details?: MasterService['details']) {
    const formControls = {};
    tableFields.map(field => {
        const validators = [Validators.maxLength(field.longitud)];
        field.obligatorio ? validators.push(Validators.required) : 0 ;
        (field.tipo === 'numeric' && field.obligatorio) ? validators.push(Validators.min(0.1)) : 0;
        formControls[field.nombrecampo] = new FormControl(register && register[field.nombrecampo] !== undefined 
          ? register[field.nombrecampo] : field.defecto, validators);
    });

    // if (details) {
    //     // tslint:disable-next-line:forin
    //     for (const key in details) {
    //         formControls[key] = new FormArray([]);

    //         if (register && register[key]) {
    //             // Construye un formGroup por cada objeto del detalle
    //             for (const detail of register[key]) {
    //                 let controlsList: {[key: string]: AbstractControl} = {};
    //                 details[key].map(dataDetail => {
    //                     let validators = [Validators.maxLength(dataDetail['longitud'])];
    //                     dataDetail['obligatorio'] ? validators.push(Validators.required) : 0;
    //                     (dataDetail['tipo'] === 'numeric' && dataDetail['obligatorio'])  ? validators.push(Validators.min(1)) : 0;
    //                     controlsList[dataDetail['nombrecampo']] = new FormControl(detail[dataDetail['nombrecampo']] || dataDetail['defecto'], validators);

    //                 });
    //                 formControls[key].push(new FormGroup(controlsList));
    //             }
    //         }
    //     }
    // }
    return formControls;
  }
}
