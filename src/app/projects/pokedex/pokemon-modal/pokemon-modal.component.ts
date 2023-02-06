import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-pokemon-modal',
    templateUrl: 'pokemon-modal.component.html',
    styleUrls: ['pokemon-modal.component.scss'],
    animations: [
        trigger(
          'inOutAnimation', 
          [
            transition(
              ':enter', 
              [
                style({ height: 0, opacity: 0 }),
                animate('1s ease-out', 
                        style({ height: 300, opacity: 1 }))
              ]
            ),
            transition(
              ':leave', 
              [
                style({ height: 300, opacity: 1 }),
                animate('1s ease-in', 
                        style({ height: 0, opacity: 0 }))
              ]
            )
          ]
        )
    ]
})
export class PokemonModalComponent implements OnInit {
    @Input() pokemonName: string;

    isShowingModal = false;

    selectedPokemon;

    currentSprite = 0;

    constructor(
        private pokedexService: PokedexService
    ){}

    ngOnInit(): void {
    }

    showModal(pokemon) {       
        this.isShowingModal = true;           
        this.findPokemonByName(pokemon);
    }

    closeModal() {
        this.isShowingModal = false;
    }

    changeSprite() {
        if(this.currentSprite != 3) {
            this.currentSprite++;
        } else {
            this.currentSprite = 0;
        }
    }

    private findPokemonByName(pokemon) {
        this.pokedexService.getPokemonByName(pokemon).subscribe(
            (dados) => {
                console.log(dados);
                this.selectedPokemon = dados;

                this.findWeaknessesByType(dados);
            },
            (e) => {
                console.log(e);
            }
        )
    }

    private findWeaknessesByType(dados) {
        let weakness = [];
        const types= dados.types;

        types.forEach(element => {
            this.pokedexService.getWeaknessesByTypeName(element.type.name).subscribe(
                (dados) => {
                    // console.log(dados['damage_relations']);
                },
                (e) => {
                    console.log(e);
                }
            );
        });
        
    }
}

/*
0 - front_default
1 - back_default
2 - front_shiny
3 - back_shiny
*/