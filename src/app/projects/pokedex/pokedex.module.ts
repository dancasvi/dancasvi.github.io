import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokedexComponent } from "./pokedex.component";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";

@NgModule({
    declarations: [
        PokedexComponent,
        PokemonCardComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        PokedexComponent,
        PokemonCardComponent
    ],
    providers: [
    ]
})
export class PokedexModule {}