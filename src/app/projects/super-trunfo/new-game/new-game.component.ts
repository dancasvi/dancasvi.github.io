import { Component, OnInit } from "@angular/core";
import { SuperTrunfoService } from "../../services/super-trunfo.service";

@Component({
    selector: 'app-new-game',
    templateUrl: 'new-game.component.html',
    styleUrls: ['new-game.component.scss']
})
export class NewGameComponent implements OnInit {
    numberOfPlayers;
    isLoading = false;
    isShuffling = false;

    player1:number[] = [];
    player2:number[] = [];
    player3:number[] = [];
    player4:number[] = [];
    cards;

    constructor(
        private service: SuperTrunfoService
    ){}

    ngOnInit(): void {
        this.getCards();
        this.getNumberOfPlayers();
    }

    public showCard(card) {
        this.service.getCardById(card).subscribe(
            (dados) => {
                if(dados.status == 1) {
                    console.log(dados);
                }
                this.hideLoading();                
            },
            (e) => {
                console.log(e);
                this.hideLoading();
            }
        );
    }

    private getNumberOfPlayers() {
        this.numberOfPlayers = window.localStorage.getItem("numberOfPlayers"); 
    }

    private getCards() {
        this.service.getAll().subscribe(
            (dados) => {
                if(dados.status == 1) {
                    this.cards = dados.data;

                    this.distributeCards();
                }
                this.hideLoading();                
            },
            (e) => {
                console.log(e);
                this.hideLoading();
            }
        )
    }

    private showShuffle() {
        this.isShuffling = true;
    }

    private hideShuffle() {
        this.isShuffling = false
    }

    private distributeCards() {
        this.showShuffle();        
        switch(this.numberOfPlayers.toString()) {
            case '2':
                while(this.player1.length < 16) {
                    const card = parseInt(this.getRandomArbitrary(0, 32));
                    if(!this.player1.includes(card) && !this.player2.includes(card) && this.player1.length < 16) {
                        this.player1.push(card);                        
                    }
                }

                while(this.player2.length < 16) {
                    const card = parseInt(this.getRandomArbitrary(0, 32));
                    if(!this.player1.includes(card) && !this.player2.includes(card) && this.player2.length < 16) {
                        this.player2.push(card);
                    }
                }

                break;
            case '4':
                while(this.player1.length < 8) {
                    const card = parseInt(this.getRandomArbitrary(0, 32));
                    if(!this.player1.includes(card) &&
                       !this.player2.includes(card) && 
                       !this.player3.includes(card) &&
                       !this.player4.includes(card) &&
                       this.player1.length < 8) {
                        this.player1.push(card);
                    }
                }

                while(this.player2.length < 8) {
                    const card = parseInt(this.getRandomArbitrary(0, 32));
                    if(!this.player1.includes(card) &&
                       !this.player2.includes(card) &&
                       !this.player3.includes(card) &&
                       !this.player4.includes(card) &&
                       this.player2.length < 8) {
                        this.player2.push(card);
                    }
                }

                while(this.player3.length < 8) {
                    const card = parseInt(this.getRandomArbitrary(0, 32));
                    if(!this.player1.includes(card) &&
                    !this.player2.includes(card) &&
                    !this.player3.includes(card) &&
                    !this.player4.includes(card) &&
                    this.player3.length < 8) {
                        this.player3.push(card);
                    }
                }

                while(this.player4.length < 8) {
                    const card = parseInt(this.getRandomArbitrary(0, 32));
                    if(!this.player1.includes(card) && 
                       !this.player2.includes(card) && 
                       !this.player3.includes(card) &&
                       !this.player4.includes(card) &&
                    this.player4.length < 8) {
                        this.player4.push(card);
                    }
                }

                break;
        }
        setTimeout(() => {
            this.hideShuffle();
        }, 3000);        
    }

    private showLoading() {
        this.isLoading = true;
    }

    private hideLoading() {
        this.isLoading = false;
    }

    private getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}