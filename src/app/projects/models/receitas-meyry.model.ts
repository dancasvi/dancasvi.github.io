export class Recipe {
    id:number;
    name: string;
    active: boolean;
    description: string;
    prepTime: string;//tempo para preparar
    serving: number;//qtd porções que rende
    ingredients: Ingredient[];
    steps: Step[];
    nutritionfacts: NutritionFact[];
    categories: Category[];
    images: RecipeImages[];
}

export class Ingredient {
    id:number;
    description: string;
}

export class Step {
    order:number;
    name:string;
    description:string;
}

export class NutritionFact {
    id:number;
    amount:string;
    type:string;
}

export class Category {
    id:number;
    name:string;
    description: string;
}

export class RecipeImages {
    url: string;
}