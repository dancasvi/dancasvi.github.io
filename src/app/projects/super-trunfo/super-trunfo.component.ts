import { Component, Inject, OnInit } from "@angular/core";
import { SuperTrunfoService } from "../services/super-trunfo.service";
import { MenuItem } from "../models/super-trunfo.model";
import { DOCUMENT } from "@angular/common";
import { Router } from "@angular/router";

@Component({
    selector: 'app-super-trunfo',
    templateUrl: 'super-trunfo.component.html',
    styleUrls: ['super-trunfo.component.scss']
})
export class SuperTrunfoComponent implements OnInit {
    isLoading = false;
    showingRules = false;
    showingStartGameModal = false; 
    numberOfPlayers = 0;

    constructor(
        @Inject(DOCUMENT) document: Document,
        private service: SuperTrunfoService,
        private router: Router
    ){}

    ngOnInit(): void {       
    }

    public navigateTo(clickedMenuItem) {
        switch(clickedMenuItem) {
            case MenuItem.NEW:
                this.openStartGameModal();
                break;
            case MenuItem.RULES:
                this.showRules();
                break;
        }
    }

    public startGame() {
        let selecetNumberOfPlayers = (<HTMLInputElement>document.getElementById("numberOfPlayers")).value
        
        if(selecetNumberOfPlayers != "-") {
            this.numberOfPlayers = parseInt(selecetNumberOfPlayers);

            window.localStorage.setItem("numberOfPlayers", this.numberOfPlayers.toString());
            this.router.navigate(['projects/super-trunfo/play']);            
        }
    }

    public closeRules() {
        this.hideRules();
    }

    public openStartGameModal() {
        this.showingStartGameModal = true;
    }

    public closeStartGameModal() {
        this.showingStartGameModal = false;
    }

    private showLoading() {
        this.isLoading = true;
    }

    private hideLoading() {
        this.isLoading = false;
    }

    private showRules() {
        this.showingRules = true;
    }

    private hideRules() {
        this.showingRules = false;
    }
}