import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-simple-table',
    templateUrl: 'simple-table.component.html',
    styleUrls: ['simple-table.component.scss']    
})
export class SimpleTableComponent implements OnInit {   
    @Input() tableOptions = 
    {
        // columns:['Cargo', 'Empresa', 'Data Início', 'Data Fim'],
        // rows: 
        // [
        //     {
        //         cargo:'Estagiário em TI',
        //         empresa:'TRE/ES',
        //         dataInicio: '06/2016',
        //         dataFim: '01/2018'
        //     }
        // ]
        entity: '',
        columns:[],
        rows: []
    }

    @Output() actionEvent = new EventEmitter<{action:string, entity: string, id}>();
    
    ngOnInit(): void {        
    }   
    
    onActionClick(action, row) {
        this.actionEvent.emit({action, entity:this.tableOptions.entity, id: row.id});
    }
}