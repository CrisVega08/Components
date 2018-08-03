import { Component, OnInit, Input, Output, EventEmitter, OnChanges, forwardRef, SimpleChanges } from '@angular/core';
import { FormGroup,
        ControlValueAccessor,
        FormControl,
        NG_VALUE_ACCESSOR,
        NG_VALIDATORS } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
      {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => AddressComponent),
          multi: true,
      },
      {
          provide: NG_VALIDATORS,
          useExisting: forwardRef(() => AddressComponent),
          multi: true,
      }]
})

export class AddressComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() readOnly: boolean;
  @Input() classLabel: string;
  @Input() showDescription = true;
  @Input() columnLg = 6;
  @Input('fields') _fields: Array<Object>;
  @Input('address') address: FormGroup | Object;
  @Output('createExtern') _createExtern: EventEmitter<any> = new EventEmitter();
  @Output('valueChanged') _valueChanged: EventEmitter<any> = new EventEmitter();
  private showMap: string;
  private zoom = 10;
  private geocoder: any;
  private addressForm: FormGroup;
  private noAddressFound: boolean;

  private population = {
    // component: PoblacionesComponent,
    uri: 'pob',
    oid: 11,
    versions: {
        getVersion: 'v1',
        structureVersion: 'v2',
        putVersion: 'v1',
        postVersion: 'v1',
        deleteVersion: 'v1',
        mastersVersion: 'v1',
    }
  };


  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor(private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
  }

  writeValue(add: FormGroup) {
    if (add !== null) {
        this.address = add;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }

  validate(c: FormControl) {
    return null;
  }

  private propagateChange = (_: any) => { };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['address'] && changes['address'].currentValue) {
        if ((changes['address'].currentValue instanceof FormGroup)) {
            if ((<FormGroup>this.address).controls.latitud.value !== null && (<FormGroup>this.address).controls.latitud.value !== undefined) {
                (<FormGroup>this.address).controls.latitud.setValue(+(<FormGroup>this.address).controls.latitud.value);
            }
            if ((<FormGroup>this.address).controls.longitud.value !== null && (<FormGroup>this.address).controls.longitud.value !== undefined) {
                (<FormGroup>this.address).controls.longitud.setValue(+(<FormGroup>this.address).controls.longitud.value);
            }
        } else {
            this.address['longitud'] = +this.address['longitud'];
            this.address['latitud'] = +this.address['latitud'];
        }
    }
}
}
