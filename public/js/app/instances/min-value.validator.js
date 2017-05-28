/**
 * Validator for min value of number.
 *
 * @param min number
 * @returns {(control:AbstractControl)=>{[p: string]: any}} { 'minValue': {min} } if validated number is less then min,
 * other way null
 */
export function minValue(min) {
    return function (control) {
        var input = control.value, isValid = input < min;
        if (isValid)
            return { 'minValue': { min: min } };
        else
            return null;
    };
}
