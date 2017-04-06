import { ValidatorFn, AbstractControl } from "@angular/forms";

export function minValue(min: Number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const input = control.value,
            isValid = input < min;
        if(isValid)
            return { 'minValue': {min} };
        else
            return null;
    };
}