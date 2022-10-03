import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToDoListComponent } from "./to-do-list.component";

@NgModule({
    declarations: [
        ToDoListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ToDoListComponent
    ],
    providers: [
    ]
})
export class ToDoListModule {}