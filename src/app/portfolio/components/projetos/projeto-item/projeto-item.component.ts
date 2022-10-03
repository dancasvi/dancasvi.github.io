import { Component, Input, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
import { ProjetoItem } from "src/app/portfolio/models/projetos.model";

@Component({
    selector: 'app-projeto-item',
    templateUrl: 'projeto-item.component.html',
    styleUrls: ['projeto-item.component.scss']
})
export class ProjetoItemComponent implements OnInit {

    @Input() item = new ProjetoItem(0, '', [''], '');

    constructor(private router: Router){}

    ngOnInit(): void {
    }
}