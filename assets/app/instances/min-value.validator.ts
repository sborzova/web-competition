import {ValidatorFn, AbstractControl} from "@angular/forms";

/**
 * Check if validated number is less than min.
 *
 * @param min number
 * @returns {(control:AbstractControl)=>{[p: string]: any}} { 'minValue': {min} } if validated number is less then min,
 * other way null
 */
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