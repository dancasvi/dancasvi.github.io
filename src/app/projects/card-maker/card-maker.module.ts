import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardMakerComponent } from "./card-maker.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        CardMakerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CardMakerComponent
    ],
    providers: [
    ]
})
export class CardMakerModule {}