import {Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked} from "@angular/core";

import { Technique } from "../technique.model";
import { TechniqueService } from "../technique.service";
import {ErrorService} from "../../messages/errors/error.service";
import {SuccessComponent} from "../../messages/successes/success.component";
import {SuccessService} from "../../messages/successes/success.service";

@Component({
    selector: 'app-technique-list',
    templateUrl: './technique-list.component.html'
})
export class TechniqueListComponent implements OnInit {
    techniques: Technique[];

    constructor(private techniqueService: TechniqueService,
                private errorService: ErrorService,
                private successService: SuccessService) {

    }

    ngOnInit() {
        this.techniqueService.getTechniques()
            .subscribe(
                (techniques: Technique[]) => {
                    this.techniques = techniques;
                }
            );
    }

}