import { Component, Input, OnInit } from "@angular/core";
import { ExperienciaItem } from "src/app/portfolio/models/experiencias.model";

@Component({
    selector: 'app-experiencia-item',
    templateUrl: 'experiencia-item.component.html',
    styleUrls: ['experiencia-item.component.scss']
})
export class ExperienciaItemComponent implements OnInit {

    @Input() item = new ExperienciaItem();

    ngOnInit(): void {
    }
}