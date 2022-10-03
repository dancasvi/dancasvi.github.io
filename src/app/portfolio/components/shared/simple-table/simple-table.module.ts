import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { KeysPipe } from "./pipe";
import { SimpleTableComponent } from "./simple-table.component";

@NgModule({
    declarations: [
        SimpleTableComponent,
        KeysPipe
    ],
    imports: [
      CommonModule
    ],
    exports: [
        SimpleTableComponent,
        KeysPipe
    ],
    providers: [
    ]
})
export class SimpleTableModule {}