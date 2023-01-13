import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-sobre',
    templateUrl: 'sobre.component.html',
    styleUrls: ['sobre.component.scss']
})
export class SobreComponent implements OnInit {
    showAboutMe = false;

    constructor(
    ) {}
    
    ngOnInit(): void {
        // setTimeout(() => {
            this.showAboutMe = true;
        // }, 4000);
    }
}