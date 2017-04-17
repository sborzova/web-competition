import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
export var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true';
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (formControl) {
        var value1 = formControl.value;
        var value2 = formControl.root.get(this.validateEqual);
        if (value2 && value1 !== value2.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        if (value2 && value1 === value2.value && this.isReverse) {
            delete value2.errors['validateEqual'];
            if (!Object.keys(value2.errors).length)
                value2.setErrors(null);
        }
        if (value2 && value1 !== value2.value && this.isReverse) {
            value2.setErrors({ validateEqual: false });
        }
        return null;
    };
    EqualValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[validateEqual][formControlName],[validateEqual][formGroup],[validateEqual][formControl],[validateEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return EqualValidator; }), multi: true }
                    ]
                },] },
    ];
    /** @nocollapse */
    EqualValidator.ctorParameters = [
        { type: undefined, decorators: [{ type: Attribute, args: ['validateEqual',] },] },
        { type: undefined, decorators: [{ type: Attribute, args: ['reverse',] },] },
    ];
    return EqualValidator;
}());
