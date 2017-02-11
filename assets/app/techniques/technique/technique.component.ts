import { Component, Input } from "@angular/core";

import { Technique } from "../technique.model";
import { TechniqueService } from "../technique.service";

@Component({
    selector: 'app-technique',
    templateUrl: './technique.component.html'
})
export class TechniqueComponent {
    @Input() technique: Technique;

    constructor(private techniqueService: TechniqueService) {}

    onEdit() {

    }

    onDelete() {
        this.techniqueService.deleteTechnique(this.technique)
            .subscribe(
                result => console.log(result)
            );
    }

}