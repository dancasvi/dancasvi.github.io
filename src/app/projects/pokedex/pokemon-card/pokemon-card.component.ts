import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

@Component({
    selector: 'app-pokemon-card',
    templateUrl: 'pokemon-card.component.html',
    styleUrls: ['pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit, OnChanges {
    @Input() pokemonName: string;

    currentPokemon;

    constructor(
        private pokedexService: PokedexService
    ){}

    ngOnInit(): void {
        this.pokedexService.getPokemonByName(this.pokemonName).subscribe(
            (dados) => {
                this.currentPokemon = dados;
            },
            (e) => {
                console.log(e);
            }
        )
    }

    ngOnChanges(changes: SimpleChanges) {
        // only run when property "data" changed
        // if (changes['pokemonName']) {
        //     this.pokedexService.getPokemonByName(changes['pokemonName'].currentValue).subscribe(
        //         (dados) => {
        //             console.log(dados);
        //             this.currentPokemon = dados;
        //         },
        //         (e) => {
        //             console.log(e);
        //         }
        //     )
        // }
    }
}