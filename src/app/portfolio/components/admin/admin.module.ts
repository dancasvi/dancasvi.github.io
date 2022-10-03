import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SimpleAddFormModule } from "../shared/simple-add-form/simple-add-form.module";
import { SimpleTableModule } from "../shared/simple-table/simple-table.module";
import { AdminComponent } from "./admin.component";

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
      CommonModule,
      SimpleTableModule,
      SimpleAddFormModule
    ],
    exports: [
        AdminComponent
    ],
    providers: [
    ]
})
export class AdminModule {}