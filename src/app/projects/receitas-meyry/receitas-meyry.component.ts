import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category, Ingredient, Recipe, Step } from '../models/receitas-meyry.model';

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
        private formBuilder: FormBuilder
    ){}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            name: [''],
            category: ['']
        });

        this.mockRecipe();
    }

    public seeRecipe(recipe) {
        console.log(recipe);
    }

    private mockRecipe():Recipe {
        const recipe = new Recipe();
        const ingredients:Ingredient[] = [];
        const steps: Step[] = [];
        const categories: Category[] = [];

        recipe.id = 1;
        recipe.name = 'Curtido';
        recipe.active = true;
        recipe.description = 'Curtido is a cabbage slaw from El Salvador that is usually served with pupusas. This extremely easy recipe is also an excellent way to extend the life of vegetables.';
        recipe.prepTime = '15 min';
        recipe.serving = 12;

        recipe.ingredients = ingredients;
        recipe.steps = steps;
        recipe.categories = categories;

        const ingredient1 = new Ingredient();
        ingredient1.id = 1;
        ingredient1.description = 'medium cabbage, finely shredded';
        
        const ingredient2 = new Ingredient();
        ingredient2.id = 2;
        ingredient2.description = 'kosher salt, plus more to taste';

        const ingredient3 = new Ingredient();
        ingredient3.id = 3;
        ingredient3.description = 'carrots, grated';

        const ingredient4 = new Ingredient();
        ingredient4.id = 4;
        ingredient4.description = 'red onions, very thinly sliced';

        const ingredient5 = new Ingredient();
        ingredient5.id = 5;
        ingredient5.description = 'fresh jalapeños, sliced, optional';

        const ingredient6 = new Ingredient();
        ingredient6.id = 6;
        ingredient6.description = 'dried oregano';

        const ingredient7 = new Ingredient();
        ingredient7.id = 7;
        ingredient7.description = 'apple cider vinegar';

        ingredients.push(ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7);

        const step1 = new Step();
        step1.order = 1;
        step1.name = 'Salt the cabbage';
        step1.description = 'Place your shredded cabbage in a colander and sprinkle it with 1 1/2 teaspoons salt. Let it sit for a few minutes, then press it down to remove excess moisture.';
        
        const step2 = new Step();
        step2.order = 2
        step2.name = 'Blanch the vegetables (optional)';
        step2.description = 'Mix the cabbage with the carrots in a medium bowl and cover with boiling water. Let sit for 5 minutes to soften the vegetables slightly. This step is optional, and some people prefer to pickle the ingredients directly without blanching. Blanching is a good idea if you are planning to eat the curtido immediately as it will soften the vegetables a bit. If you are making this recipe ahead, you can skip blanching since pickling will do the softening for you. Remove the vegetables from the water and dry them thoroughly.';

        const step3 = new Step();
        step1.order = 3;
        step1.name = 'Make the curtido';
        step3.description = 'In a glass container or containers, add the cabbage, carrots, red onions, jalapeños (if using), and dried oregano. Add the vinegar. Slowly add salt to taste, combining thoroughly and tasting often. Cover with a lid and refrigerate until you are ready to serve. Because fermentation releases CO2, you want to keep an eye on your jars so they don’t leak. To prevent this from happening, crack open the lid every day or so to let excess gas escape (this is known as burping).The curtido’s flavor will be best at least 24 hours after being made. It will keep for 2 to 3 weeks.';

        steps.push(step1, step2, step3);

        this.recipes.push(recipe);

        const category1 = new Category();
        category1.id = 1;
        category1.name = 'Salad';
        category1.description = 'pru';

        const category2 = new Category();
        category2.id = 2;
        category2.name = 'Shit';
        category2.description = 'pru';

        categories.push(category1, category2);

        return recipe;
    }
}