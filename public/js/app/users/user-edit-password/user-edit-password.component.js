import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
/**
 *  Component to edit user's password as admin.
 */
export var UserEditPasswordComponent = (function () {
    /**
     * When creating component, inject dependencies.
     *
     * @param router
     * @param usersService
     * @param activatedRoute
     * @param flashMessageService
     */
    function UserEditPasswordComponent(router, usersService, activatedRoute, flashMessageService) {
        this.router = router;
        this.usersService = usersService;
        this.activatedRoute = activatedRoute;
        this.flashMessageService = flashMessageService;
        this.submitted = false;
    }
    /**
     *  When creating component, call function to get user by route parameter's id
     *  and create edit user's password form.
     */
    UserEditPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.activatedRoute.snapshot.params['id'];
        this.usersService.getUser(id)
            .subscribe(function (user) {
            _this.user = user;
            _this.passwordForm = new FormGroup({
                password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
                confirmPassword: new FormControl(null, Validators.required)
            });
        });
    };
    /**
     * If edit user's password form is valid, call function to update user.
     */
    UserEditPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.passwordForm.valid) {
            this.user.password = this.passwordForm.value.password;
            this.usersService.updateUserPassword(this.user)
                .subscribe(function (data) {
                _this.flashMessageService.showMessage('Password was changed.', 'success');
                _this.navigateBack();
            }, function (error) { return console.error(error); });
        }
    };
    /**
     * Navigate to route Users Management.
     */
    UserEditPasswordComponent.prototype.navigateBack = function () {
        this.router.navigate(['/users']);
    };
    UserEditPasswordComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    UserEditPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-user-edit-password',
                    templateUrl: './user-edit-password.component.html'
                },] },
    ];
    /** @nocollapse */
    UserEditPasswordComponent.ctorParameters = [
        { type: Router, },
        { type: UsersService, },
        { type: ActivatedRoute, },
        { type: FlashMessageService, },
    ];
    return UserEditPasswordComponent;
}());
