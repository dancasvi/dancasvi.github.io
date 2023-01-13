import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SobreComponent } from "./sobre.component";

@NgModule({
    declarations: [
        SobreComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
        SobreComponent
    ],
    providers: [
    ]
})
export class SobreModule {}