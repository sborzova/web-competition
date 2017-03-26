import { Component, ViewChild } from "@angular/core";
import { SolutionService } from "../shared/solution.service";
import { SolutionCreate } from "./solution-create.model";
import { Validation } from "./validation.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { SessionStorageService } from "../shared/session-storage.service";
export var ValidationComponent = (function () {
    function ValidationComponent(validationService, sessionStorageService, flashMessageService) {
        this.validationService = validationService;
        this.sessionStorageService = sessionStorageService;
        this.flashMessageService = flashMessageService;
        this.solution = new SolutionCreate();
        this.display = 'none';
    }
    ValidationComponent.prototype.ngOnInit = function () {
        if (!this.showValidator()) {
            this.display = 'block';
        }
    };
    ValidationComponent.prototype.showValidator = function () {
        var loggedIn = this.sessionStorageService.isLoggedIn();
        var competitionIsOn = this.sessionStorageService.getCompetitionIsOn();
        var isAdmin = this.sessionStorageService.isAdmin();
        return !(!loggedIn && competitionIsOn) || isAdmin;
    };
    ValidationComponent.prototype.onValidate = function () {
        var _this = this;
        this.validationService.successValidationHideResult();
        var solutionInput = this.solutionElem.nativeElement;
        if (solutionInput.files && solutionInput.files[0]) {
            var fd = new FormData();
            fd.append('solution', solutionInput.files[0], solutionInput.files[0].name);
            this.validationService.validate(fd)
                .subscribe(function (data) {
                var result = JSON.parse(data);
                if (result.status == 400) {
                    _this.flashMessageService.showMessage('Invalid XML format.', 'alert-danger');
                }
                else {
                    var info = "";
                    var logs = result.obj.log;
                    for (var _i = 0, logs_1 = logs; _i < logs_1.length; _i++) {
                        var log_1 = logs_1[_i];
                        info += log_1 + "\n";
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
                    _this.validationService.successValidationShowResult(validation, solutionInput.files[0]);
                    _this.solutionElem.nativeElement.value = "";
                }
            }, function (error) { return console.error(error); });
        }
        else {
            this.flashMessageService.showMessage('Insert file.', 'alert-info');
        }
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
