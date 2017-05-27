import {Injectable} from "@angular/core";
import {PreferenceService} from "../../preference/preference.service";

@Injectable()
export class SessionStorageService {

    constructor(private preferenceService: PreferenceService){}

    /**
     * Removes from session storage token, userId, email, isAdmin.
     */
    logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('isAdmin');
    }

    /**
     * Check if someone is logged in.
     *
     * @returns {boolean} true if someone is logged in, other way false
     */
    isLoggedIn() {
        return sessionStorage.getItem('token') !== null;
    }

    /**
     * Check if logged in user is admin.
     *
     * @returns {boolean} true if logged in user is admin, other way false
     */
    isAdmin(){
        return sessionStorage.getItem('isAdmin') !== null;
    }

    /**
     * Return logged in user's email.
     *
     * @returns {string|null} email
     */
    getEmailLoggedIn(){
        return sessionStorage.getItem('email');
    }

    /**
     * Check if during competition is on.
     *
     * @returns {boolean} true if during competition is on, other way false
     */
    getCompetitionIsOn(){
        return sessionStorage.getItem('competitionIsOn') == 'true';
    }

    /**
     * Set to session storage logged in user's data.
     *
     * @param data - data contains token, user's id, user's email
     */
    setSessionStorageAuth(data){
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userId', data.userId);
        sessionStorage.setItem('email', data.email);

        if (data.isAdmin === 'true'){
            sessionStorage.setItem('isAdmin', 'true');
        }
    }

    /**
     * Set to session storage competition state
     */
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

    /**
     * Set to session storage competition state during on.
     */
    setSessionStorageCompetitionIsOn(){
        sessionStorage.setItem('competitionIsOn', 'true');
    }

    /**
     * Set to session storage competition state during off.
     */
    setSessionStorageCompetitionIsOff(){
        sessionStorage.setItem('competitionIsOn', 'false');
    }
}