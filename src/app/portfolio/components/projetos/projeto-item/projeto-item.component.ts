import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
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
    // status = 20;

    constructor(
        private router: Router,
        private domSanitizer: DomSanitizer
    ){}

    ngOnInit(): void {
        if(this.item.Icon) {
            this.item.Icon = this.item.Icon.toString().trim();
            this.item.Icon = "../../../../../assets/portfolio/project-icons/"+this.item.Icon+'.jpg';            
        }
    }

    public navigateToApp(appRoute) {
        this.router.navigate([`projects/${appRoute}`]);
    }
}