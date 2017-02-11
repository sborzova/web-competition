import { Component, OnInit } from "@angular/core";

import { Technique } from "../technique.model";
import { TechniqueService } from "../technique.service";

@Component({
    selector: 'app-technique-list',
    templateUrl: './technique-list.component.html'
})
export class TechniqueListComponent implements OnInit {
    techniques: Technique[];

    constructor(private techniqueService: TechniqueService) {}

    ngOnInit() {
        this.techniqueService.getTechniques()
            .subscribe(
                (techniques: Technique[]) => {
                    this.techniques = techniques;
                }
            );
    }
}