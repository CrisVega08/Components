import { FormControl } from '@angular/forms';

export function validateRange(c: FormControl) {
    const err = {
      rangeError: {
        given: c.value,
        max: 10,
        min: 0
      }
    };
    console.log('value en validator', c.value);
    return (c.value > 10 || c.value < 0) ? err : null;
}
