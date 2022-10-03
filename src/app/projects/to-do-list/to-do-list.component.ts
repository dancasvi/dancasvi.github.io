import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-to-do-list',
    templateUrl: 'to-do-list.component.html',
    styleUrls: ['to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
    formGroup: FormGroup;

    todoList:string[] = [];

    constructor(
        private formBuilder: FormBuilder,
        @Inject(DOCUMENT) document: Document
    ){}

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            title: ['']
        });
    }

    public addItem() {
        const title = this.formGroup.get('title').value;

        if(title) {
            this.todoList.push(title);
            this.formGroup.reset();
        }
    }

    public removeItem(item) {
        this.todoList = this.todoList.filter(element => element != item);
    }

    public concludeItem(item) {
        document.getElementById(item).className = 'task-done';
    }
}