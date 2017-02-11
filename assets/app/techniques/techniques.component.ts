import {Component, Input} from '@angular/core';

import { ErrorService } from "../messages/errors/error.service";
import { SuccessService } from "../messages/successes/success.service";
import { TechniqueService } from "./technique.service";
import { Technique } from "./technique.model";

@Component({
    selector: 'app-techniques',
    templateUrl: 'techniques.component.html',
    providers: [ TechniqueService ]
})
export class TechniquesComponent {

}