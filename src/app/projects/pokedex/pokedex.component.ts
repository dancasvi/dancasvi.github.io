import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';

@Component({
    selector: 'app-pokedex',
    templateUrl: 'pokedex.component.html',
    styleUrls: ['pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
    pokemonList = [];
    limit = 10;
    isLoading = false;

    constructor(
        private pokedexService: PokedexService
    ){}

    ngOnInit(): void {
        this.loadPokemon();
    }

    public loadMore() {
        this.showLoading();
        setTimeout(() => {
            this.limit += 10;
            this.loadPokemon();
        }, 2000);        
    }

    private loadPokemon() {
        this.showLoading();
        this.pokedexService.getAllPokemon(this.limit).subscribe(
            (dados) => {
                this.pokemonList = dados.results;
                this.hideLoading();
            },
            (e) => {
                console.log(e);
                this.hideLoading();
            }
        );
    }

    private showLoading() {
        this.isLoading = true;
    }

    private hideLoading() {
        this.isLoading = false;
    }
}