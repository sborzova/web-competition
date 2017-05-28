import { Component, ViewChild } from "@angular/core";
import { SolutionService } from "../shared/services/solution.service";
import { Validation } from "./validation.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { SessionStorageService } from "../shared/services/session-storage.service";
export var ValidationComponent = (function () {
    /**
     *
     * @param validationService
     * @param sessionStorageService
     * @param flashMessageService
     */
    function ValidationComponent(validationService, sessionStorageService, flashMessageService) {
        this.validationService = validationService;
        this.sessionStorageService = sessionStorageService;
        this.flashMessageService = flashMessageService;
    }
    /**
     * Check if validation component can be shown.
     */
    ValidationComponent.prototype.ngOnInit = function () {
        if (!this.showValidator()) {
            document.getElementById('openModalNotView').click();
        }
    };
    /**
     *  When different file is inserted, hide result of the previous one.
     */
    ValidationComponent.prototype.onChange = function () {
        this.validationService.successValidationHideResult();
    };
    /**
     * Return true if validation component can be shown, other way false.
     *
     * @returns {boolean} true if logged in user is admin or competition state is off
     *  or (competition state is on and user is logged in), other way false
     */
    ValidationComponent.prototype.showValidator = function () {
        var isLoggedIn = this.sessionStorageService.isLoggedIn();
        var competitionIsOn = this.sessionStorageService.getCompetitionIsOn();
        var isAdmin = this.sessionStorageService.isAdmin();
        return !competitionIsOn || isAdmin || (competitionIsOn && isLoggedIn);
    };
    /**
     * Check if input for solution is empty.
     */
    ValidationComponent.prototype.onValidate = function () {
        this.validationService.successValidationHideResult();
        var solutionInput = this.solutionElem.nativeElement;
        if (solutionInput.files && solutionInput.files[0]) {
            this.validateSolution(solutionInput.files[0]);
        }
        else {
            this.flashMessageService.showMessage('Insert file.', 'info');
        }
    };
    /**
     *  Validate solution and show result.
     *
     * @param file - solution's file to save
     */
    ValidationComponent.prototype.validateSolution = function (file) {
        var _this = this;
        var fd = new FormData();
        fd.append('solution', file, file.name);
        this.validationService.validate(fd)
            .subscribe(function (data) {
            _this.logMessage = null;
            var result = JSON.parse(data);
            if (result.status == 400) {
                _this.flashMessageService.showMessage('Invalid XML format.', 'danger');
            }
            if (result.obj.result != 'OK') {
                var info = "";
                var logs = result.obj.log;
                for (var _i = 0, logs_1 = logs; _i < logs_1.length; _i++) {
                    var log_1 = logs_1[_i];
                    info += log_1 + "\n";
                }
                _this.logMessage = info;
            }
            else {
                var validation = _this.createValidationWithProperties(result);
                _this.validationService.successValidationShowResult(validation, file);
            }
        }, function (error) { return console.error(error); });
    };
    /**
     * Fill validation model with result.
     *
     * @param result - result of validation
     * @returns {Validation} validation model
     */
    ValidationComponent.prototype.createValidationWithProperties = function (result) {
        var info = "";
        var logs = result.obj.log;
        for (var _i = 0, logs_2 = logs; _i < logs_2.length; _i++) {
            var log_2 = logs_2[_i];
            info += log_2 + "\n";
        }
        var instanceName = result.obj.instance;
        var property = result.obj.property;
        for (var _a = 0, property_1 = property; _a < property_1.length; _a++) {
            var p = property_1[_a];
            var value = parseFloat(p.value);
            switch (p.name) {
                case 'Assigned Variables':
                    var assigned = value;
                    break;
                case 'Room Preferences':
                    var room = value;
                    break;
                case 'Time Preferences':
                    var time = value;
                    break;
                case 'Student Conflicts':
                    var sc = value;
                    break;
                case 'Distribution Preferences':
                    var distr = value;
                    break;
                case 'Total Cost':
                    var total = value;
                    break;
            }
        }
        var validation = new Validation(parseFloat((100 - assigned).toFixed(2)), total, sc, time, room, distr, info, instanceName);
        return validation;
    };
    ValidationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-validation',
                    templateUrl: './validation.component.html'
                },] },
    ];
    /** @nocollapse */
    ValidationComponent.ctorParameters = [
        { type: SolutionService, },
        { type: SessionStorageService, },
        { type: FlashMessageService, },
    ];
    ValidationComponent.propDecorators = {
        'solutionElem': [{ type: ViewChild, args: ['solution',] },],
    };
    return ValidationComponent;
}());
