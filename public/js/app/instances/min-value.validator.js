export function minValue(min) {
    return function (control) {
        var input = control.value, isValid = input < min;
        if (isValid)
            return { 'minValue': { min: min } };
        else
            return null;
    };
}
