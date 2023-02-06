import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokedexService } from '../services/pokedex.service';
import { PokemonModalComponent } from './pokemon-modal/pokemon-modal.component';

@Component({
    selector: 'app-pokedex',
    templateUrl: 'pokedex.component.html',
    styleUrls: ['pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
    pokemonList = [];
    limit = 10;
    isLoading = false;

    selectedPokemon = '';

    form:FormGroup;   

    @ViewChild(PokemonModalComponent) child:PokemonModalComponent;

    constructor(
        private pokedexService: PokedexService,
        private formBuilder: FormBuilder
    ){}

    ngOnInit(): void {
        this.loadPokemon();

        this.form = this.formBuilder.group({            
            name: ['']
        });
    }

    public selectPokemon(e) {
        console.log(e);
        this.selectedPokemon = e.name;
        this.child.showModal(e.name);
    }

    public loadMore() {
        this.showLoading();
        setTimeout(() => {
            this.limit += 10;
            this.loadPokemon();
        }, 2000);        
    }

    public findPokemonByName() {        
        const pokeName = this.form.get('name').value;

        if(pokeName) {
            this.showLoading();
            this.pokedexService.getPokemonByName(pokeName).subscribe(
                (dados) => {
                    this.pokemonList = [];
                    this.pokemonList.push(dados);

                    this.form.reset();
                    this.hideLoading();
                },
                (e) => {
                    console.log(e);
                    this.pokemonList = [];
                    this.hideLoading();
                }
            );
        }
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