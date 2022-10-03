import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RevelationTeaComponent } from "./revelation-tea.component";

@NgModule({
    declarations: [
        RevelationTeaComponent
    ],
    exports: [
        RevelationTeaComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
    ]
})
export class RevelationTeaModule {}