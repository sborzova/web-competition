import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
export var UserEditComponent = (function () {
    function UserEditComponent(router, usersService, activatedRoute, flashMessageService) {
        this.router = router;
        this.usersService = usersService;
        this.activatedRoute = activatedRoute;
        this.flashMessageService = flashMessageService;
        this.roles = [];
        this.submitted = false;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.activatedRoute.snapshot.params['id'];
        this.usersService.getUser(userId)
            .subscribe(function (user) {
            _this.user = user;
            _this.roles.push('admin', 'user');
            _this.selectedRole = _this.user.role;
            _this.userForm = new FormGroup({
                firstName: new FormControl(_this.user.firstName, Validators.required),
                lastName: new FormControl(_this.user.lastName, Validators.required),
                email: new FormControl(_this.user.email, Validators.required)
            });
        });
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.valid) {
            this.user.firstName = this.userForm.value.firstName;
            this.user.lastName = this.userForm.value.lastName;
            this.user.email = this.userForm.value.email;
            this.user.role = this.selectedRole;
            this.usersService.updateUser(this.user)
                .subscribe(function (data) {
                _this.flashMessageService.showMessage('User was updated.', 'success');
                _this.navigateBack();
            }, function (error) { return console.error(error); });
        }
    };
    UserEditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    UserEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['/#users']);
    };
    UserEditComponent.prototype.getValue = function (role) {
        this.selectedRole = this.roles.filter(function (r) { return r == role; })[0];
    };
    UserEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-user-edit',
                    templateUrl: './user-edit.component.html'
                },] },
    ];
    /** @nocollapse */
    UserEditComponent.ctorParameters = [
        { type: Router, },
        { type: UsersService, },
        { type: ActivatedRoute, },
        { type: FlashMessageService, },
    ];
    return UserEditComponent;
}());
