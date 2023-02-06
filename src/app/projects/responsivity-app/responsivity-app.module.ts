import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResponsivityAppComponent } from "./responsivity-app.component";

@NgModule({
    declarations: [
        ResponsivityAppComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ResponsivityAppComponent
    ],
    providers: [
    ]
})
export class PokedexModule {}