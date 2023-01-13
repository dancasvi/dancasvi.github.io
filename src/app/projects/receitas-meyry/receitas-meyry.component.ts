import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceitasWrapper, Recipe } from '../models/receitas-meyry.model';
import { RecipeService } from '../services/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-receitas-meyry',
    templateUrl: 'receitas-meyry.component.html',
    styleUrls: ['receitas-meyry.component.scss']
})
export class ReceitasMeyryComponent implements OnInit {
    form:FormGroup;

    categories = ['Sobremesa', 'Japonesa', 'Mexicana'];
    recipes:Recipe[] = []; 

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: RecipeService
    ){}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: [''],
            category: ['']
        });

        this.getAllRecipes();

        var ua = navigator.userAgent;
        console.log(ua);
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
            console.log("Is Mobile");
        } else if(/Chrome/i.test(ua)) {
            console.log("is chrome");
        } else {
            console.log("is other")
        }

        console.log(window.innerHeight);
        console.log(window.innerWidth);

        
    }

    public seeRecipe(recipe) {
        console.log(recipe);
    }

    public cadastrarReceita() {       
        this.router.navigate(['./receitas-meyry/cadastro-receita']);
    }

    private getAllRecipes() {
        this.service.getAllRecipes().subscribe(
            (dados:ReceitasWrapper<Recipe>) => {
                console.log(dados);

                if(dados.status == 1) {
                    this.recipes = dados.data;
                }                
            },
            (e) => {
                console.log(e);
            }
        );
    }

    private checkIfIsMobile() {

    }
}