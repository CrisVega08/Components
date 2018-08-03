import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AddressComponent } from './address.component';
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
        })
    ],
    exports: [AddressComponent],
    declarations: [AddressComponent],
    providers: [],
})
export class AddressModule { }
