import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChatInboxComponent } from "./chat-inbox.component";

@NgModule({
    declarations: [
        ChatInboxComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ChatInboxComponent
    ],
    providers: [
    ]
})
export class ChatInboxModule {}