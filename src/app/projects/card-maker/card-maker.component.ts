import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CardMakerService } from '../services/card-maker.service';

@Component({
    selector: 'app-card-maker',
    templateUrl: 'card-maker.component.html',
    styleUrls: ['card-maker.component.scss']
})
export class CardMakerComponent implements OnInit {
    form:FormGroup;

    showBackgroundPicker = false;
    showTrainerPicker = false;

    pokemonList = [];

    isLoading;

    private urlBackground = "../../../assets/card-maker-images/backgrounds/";
    private urlTrainer = "../../../assets/card-maker-images/trainers/"

    public backgroundList = 
    [
        {id: 'blue'},
        {id: 'brown'},
        {id: 'green'},
        {id: 'grey'},
        {id: 'orange'},
        {id: 'pink'},
        {id: 'purple'},
        {id: 'red'},
        {id: 'yellow'},
    ];

    public trainerList = 
    [
        {id: 'ash.png'},
        {id: 'blue.webp'},
        {id: 'green.webp'},
        {id: 'red.webp'},
        {id: 'ruby.webp'},
        {id: 'sapphire.webp'},
    ];

    generatedCard = 
    {
        name: 'DanCasVi',
        background: this.urlBackground + 'blue.png',
        trainer: this.urlTrainer + 'ash.png',
        pokemon1: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        pokemon2: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png',
        pokemon3: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png',
        pokemon4: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png',
        pokemon5: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
        pokemon6: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png',
        valid: false
    }    

    constructor(
        private formBuilder: FormBuilder,
        private cardMakerService: CardMakerService
    ){}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: [''],
            background: [''],
            trainer: [''],
            pokemon1: [''],
            pokemon2: [''],
            pokemon3: [''],
            pokemon4: [''],
            pokemon5: [''],
            pokemon6: ['']
        });

        this.getPokemonList();
    }

    public toggleBackgroundPicker():void {
        this.showBackgroundPicker = !this.showBackgroundPicker;
    }

    public toggleTrainerPicker() {
        this.showTrainerPicker = !this.showTrainerPicker;
    }

    public generateCard() {
        this.isLoading = true;
        this.generatedCard.background = this.urlBackground + (this.form.get('background').value ? this.form.get('background').value + '.png' : this.generatedCard.background);
        this.generatedCard.trainer = this.urlTrainer + (this.form.get('trainer').value ? this.form.get('trainer').value : this.generatedCard.trainer);
        this.generatedCard.name = this.form.get('name').value ? this.form.get('name').value : this.generatedCard.name;
        this.setPokemonOnCard();
        this.generatedCard.valid = true;
        this.isLoading = false;
    }

    public resetCard() {
        this.isLoading = true;
        setTimeout(() => {
            this.generatedCard.valid = false;
            this.isLoading = false;
        }, 1000);        
    }

    public pickItem(index:number) {
        this.isLoading = true;        

        setTimeout(() => {
            switch(index) {
                case 1:
                    this.toggleBackgroundPicker();
                    break;
                case 2:
                    this.toggleTrainerPicker();
                    break;
            }

            this.isLoading = false;
        }, 1000);        
    }

    private getPokemonList() {
        this.isLoading = true;
        this.cardMakerService.getAllPokemon().subscribe(
            (dados) => {
                this.pokemonList = dados.results;
                this.isLoading = false;
            },
            (e) => {
            }
        )
    }

    private getPokemonByName(order, name) {
        this.isLoading = true;
        this.cardMakerService.getPokemonByName(name).subscribe(
            (dados) => {
                switch(order) {
                    case 1:
                        this.generatedCard.pokemon1 = dados.sprites.front_default;
                        break;
                    case 2:
                        this.generatedCard.pokemon2 = dados.sprites.front_default;
                        break;
                    case 3:
                        this.generatedCard.pokemon3 = dados.sprites.front_default;
                        break;
                    case 4:
                        this.generatedCard.pokemon4 = dados.sprites.front_default;
                        break;
                    case 5:
                        this.generatedCard.pokemon5 = dados.sprites.front_default;
                        break;
                    case 6:
                        this.generatedCard.pokemon6 = dados.sprites.front_default;
                        break;
                }
                this.isLoading = false;
            },
            (e) => {
            }
        );
    }

    private setPokemonOnCard() {
        for(let i = 1; i < 7; i++) {
            if(this.form.get('pokemon'+i).value) {
                this.getPokemonByName(i, this.form.get('pokemon'+i).value);
            }
        }
    }
}