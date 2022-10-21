import { Component, Input, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
// import { ProjetoItem } from "src/app/portfolio/models/projetos.model";
import { ProjetoItem } from '../projetos.model';
@Component({
    selector: 'app-projeto-item',
    templateUrl: 'projeto-item.component.html',
    styleUrls: ['projeto-item.component.scss']
})
export class ProjetoItemComponent implements OnInit {

    @Input() item;

    constructor(private router: Router){}

    ngOnInit(): void {
    }

    public navigateToApp(appRoute) {
        this.router.navigate([appRoute]);
    }
}