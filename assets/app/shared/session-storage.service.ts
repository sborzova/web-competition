import {Injectable} from "@angular/core";
import {PreferenceService} from "../preference/preference.service";

@Injectable()
export class SessionStorageService {

    constructor(private preferenceService: PreferenceService){}

    logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('isAdmin');
    }

    isLoggedIn() {
        return sessionStorage.getItem('token') !== null;
    }

    isAdmin(){
        return sessionStorage.getItem('isAdmin') !== null;
    }

    getEmailLoggedIn(){
        return sessionStorage.getItem('email');
    }

    getCompetitionIsOn(){
        return sessionStorage.getItem('competitionIsOn') == 'true';
    }

    setSessionStorageAuth(data : any){
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userId', data.userId);
        sessionStorage.setItem('email', data.email);

        if (data.isAdmin === 'true'){
            sessionStorage.setItem('isAdmin', 'true');
        }
    }

    setSessionStorageCompetition(){
        this.preferenceService.getValueCompetitionIsOn()
            .subscribe(
                state => {
                    if (state == true){
                        this.setSessionStorageCompetitionIsOn();
                    }else {
                        this.setSessionStorageCompetitionIsOff();
                    }

                },
                error => console.error(error)
            )
    }

    setSessionStorageCompetitionIsOn(){
        sessionStorage.setItem('competitionIsOn', 'true');
    }

    setSessionStorageCompetitionIsOff(){
        sessionStorage.setItem('competitionIsOn', 'false');
    }
}