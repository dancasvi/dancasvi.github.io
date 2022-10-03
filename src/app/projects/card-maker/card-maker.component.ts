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

    private urlBackground = "../../../assets/card-maker-images/backgrounds/";
    private urlTrainer = "../../../assets/card-maker-images/trainers/"

    generatedCard = 
    {
        name: 'DanCasVi',
        background: this.urlBackground + 'blue.png',
        trainer: this.urlTrainer + 'ash.png',
        pokemon1: '',
        pokemon2: '',
        pokemon3: '',
        pokemon4: '',
        pokemon5: '',
        pokemon6: '',
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

    public selectBackground() {
        console.log(this.form.get('background').value);
    }

    public toggleTrainerPicker() {
        this.showTrainerPicker = !this.showTrainerPicker;
    }

    public generateCard() {
        console.log(this.form.value);

        // this.generatedCard.pokemon1 = this.getPokemonByName(this.form.get('pokemon1').value);
        

        // this.generatedCard.background = this.urlBackground + this.form.get('background').value + '.png';
        // this.generatedCard.trainer = this.urlTrainer + this.form.get('trainer').value + '.png';
        this.setPokemonOnCard();
        console.log(this.generatedCard.pokemon1);
        this.generatedCard.valid = true;
    }

    private getPokemonList() {
        this.cardMakerService.getAllPokemon().subscribe(
            (dados) => {
                this.pokemonList = dados.results;
            },
            (e) => {
                console.log(e);
            }
        )
    }

    private getPokemonByName(order, name) {   
        console.log(order);
        console.log(name);     
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
                
            },
            (e) => {
                console.log(e);
            }
        );
    }

    private setPokemonOnCard() {
        for(let i = 1; i < 7; i++) {
            this.getPokemonByName(i, this.form.get('pokemon'+i).value);
        }
    }
}