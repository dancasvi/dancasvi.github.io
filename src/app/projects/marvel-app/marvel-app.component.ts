import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MarvelError, MarvelWrapper } from '../models/marvel-api.model';
import { MarvelAppService } from '../services/marvel-app.service';
import { MarvelAppModalComponent } from './marvel-app-modal/marvel-app-modal.component';

@Component({
    selector: 'app-marvel-app',
    templateUrl: 'marvel-app.component.html',
    styleUrls: ['marvel-app.component.scss']
})
export class MarvelAppComponent implements OnInit {
    form:FormGroup;
    isLoading = false;

    currentTable = '';
    currentPage = 1;
    totalResults = 5;

    filtered = false;

    selectedTable = 
    {
        columns: ['ID', 'Name'],
        rows: [],
        tableName: ''
    }

    selectedElement = 
    {
        id: '',
        entity: ''
    }

    @ViewChild(MarvelAppModalComponent) modal: MarvelAppModalComponent;

    constructor(
        private formBuilder: FormBuilder,
        private marvelAppService: MarvelAppService
    ){}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            id: [''],
            name: ['']
        });
    }

    public selectEntity(element:string) {
        this.currentTable = element;
        this.selectedTable.tableName = element;
    }

    public findAll(element:string) {
        this.toggleLoading();
        const offset = this.currentPage == 1 ? 0 : (this.currentPage*10)-10;
        
        this.marvelAppService.getAll(element, offset).subscribe(
            (data) => {
                this.selectedTable.rows = data.data.results;
                this.totalResults = data.data.total;                
                this.filtered = false;
                this.form.reset();
            },
            (error) => {
            },
            () => {
                this.toggleLoading();
            }
        );
    }

    public findByName() {
        this.toggleLoading();
        const name = this.form.get('name').value;
        const table = this.currentTable;
        const offset = this.currentPage == 1 ? 0 : (this.currentPage*10)-10;

        this.marvelAppService.getByName(table, name, offset).subscribe(
            (data:MarvelWrapper<any>) => {
                this.selectedTable.rows = data.data.results;
                this.totalResults = data.data.total / 10;                
                this.filtered = true;
            },
            (e) => {

            },
            () => {
                this.toggleLoading();
            }
        );
    }

    public nextPage() {
        if(!this.modal.showModal) {
            if(this.currentPage < this.totalResults && this.currentTable) {
                this.currentPage++;
    
                if(this.filtered) {
                    this.findByName();
                } else {
                    this.findAll(this.currentTable);
                }
            } 
        }
    }

    public previousPage() {
        if(!this.modal.showModal) {
            if(this.currentPage > 1 && this.currentTable) {
                this.currentPage--;
    
                if(this.filtered) {
                    this.findByName();
                } else {
                    this.findAll(this.currentTable);
                }
            } 
        }     
    }

    public seeDetails(id) {
        this.toggleLoading();
        const table = this.currentTable;
        this.selectedElement.id = id;
        this.selectedElement.entity = table;

        this.marvelAppService.getById(table, id).subscribe(
            (data) => {
                let title;
                let description;
                let img;

                switch(table) {
                    case 'characters':
                        title = data.data.results[0].name;
                        description = data.data.results[0].description;
                        img = data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension;
                        break;
                    case 'comics':
                        title = data.data.results[0].title;
                        description = data.data.results[0].description;
                        img = data.data.results[0].images[0].path + '.' + data.data.results[0].images[0].extension;
                        break;
                }
                
                this.modal.element.title = title;
                this.modal.element.description = description;
                this.modal.element.imgUrl = img;

                this.modal.showModal = true;
            },
            (e) =>{

            },
            () => {
                this.toggleLoading();
            }
        );        
    }
    
    public resetAll() {
        this.toggleLoading();

        this.currentTable = null;
        this.selectedTable = 
        {
            columns: ['ID', 'Name'],
            rows: [],
            tableName: ''
        }

        this.modal.resetModal();

        setTimeout(() => {
            this.toggleLoading();
        }, 500);        
    }

    private toggleLoading() {
        this.isLoading = !this.isLoading;
    }
}