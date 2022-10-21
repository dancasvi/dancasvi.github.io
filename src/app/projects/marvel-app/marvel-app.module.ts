import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MarvelAppComponent } from "./marvel-app.component";
import { MarvelAppModalComponent } from "./marvel-app-modal/marvel-app-modal.component";

@NgModule({
    declarations: [
        MarvelAppComponent,
        MarvelAppModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        MarvelAppComponent,
        MarvelAppModalComponent
    ],
    providers: [
    ]
})
export class MarvelAppModule {}