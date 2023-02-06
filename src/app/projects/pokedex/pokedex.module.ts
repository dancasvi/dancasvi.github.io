import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokedexComponent } from "./pokedex.component";
import { PokemonCardComponent } from "./pokemon-card/pokemon-card.component";
import { PokemonModalComponent } from "./pokemon-modal/pokemon-modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        PokedexComponent,
        PokemonCardComponent,
        PokemonModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        PokedexComponent,
        PokemonCardComponent,
        PokemonModalComponent
    ],
    providers: [
    ]
})
export class PokedexModule {}