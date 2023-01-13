import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SuperTrunfoComponent } from "./super-trunfo.component";
import { MenuComponent } from "./menu/menu.component";
import { NewGameComponent } from "./new-game/new-game.component";

@NgModule({
    declarations: [
        SuperTrunfoComponent,
        MenuComponent,
        NewGameComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        SuperTrunfoComponent,
        MenuComponent,
        NewGameComponent
    ],
    providers: [
    ]
})
export class SuperTrunfoModule {}