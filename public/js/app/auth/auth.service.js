import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
export var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://bakalar.herokuapp.com/', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.signin = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://bakalar.herokuapp.com/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.getUser = function () {
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('https://bakalar.herokuapp.com/user' + token)
            .map(function (response) {
            return response.json().obj;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.updateUser = function (user) {
        var body = JSON.stringify(user);
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch('https://bakalar.herokuapp.com/user' + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.isAdmin = function () {
        return localStorage.getItem('isAdmin') !== null;
    };
    // isAdmin(){
    //     const token = localStorage.getItem('token')
    //         ? '?token=' + localStorage.getItem('token')
    //         : '';
    //     const headers = new Headers({'Content-Type': 'application/json'});
    //     return this.http.get('http://localhost:3000/isAdmin' + token, {headers: headers})
    //         .map((response: Response) => {
    //             return response.json().obj;
    //         })
    //         .catch((error: Response) => Observable.throw(error.json()));
    // }
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = [
        { type: Http, },
    ];
    return AuthService;
}());
