import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ChampionListComponent } from "./champion-list/champion-list.component";
import { ChampionSelectComponent } from "./champion-select.component";
import { SelectedChampionComponent } from "./selected-champion-card/selected-champion-card.component";

@NgModule({
    declarations: [
        ChampionSelectComponent,
        ChampionListComponent,
        SelectedChampionComponent
    ],
    exports: [
        ChampionSelectComponent,
        ChampionListComponent,
        SelectedChampionComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
    ]
})
export class ChampionSelectModule {}