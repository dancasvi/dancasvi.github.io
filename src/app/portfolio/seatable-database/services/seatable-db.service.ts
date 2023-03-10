import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { STProjectsDTO, STProjectsWrapper } from "../models/seatable-models";

// const URL = 'http://dancasvi.com.br:21012';
// const URL = 'localhost:8080';
const URL = 'https://cloud.seatable.io/dtable-server/api/v1/dtables/';
const BASETOKEN = 'token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzU0MzMzNTQsImR0YWJsZV91dWlkIjoiYzE2OWY5ODEtN2U4NS00MDc2LWJhYmQtMTVkNzcyZTRmNTFhIiwidXNlcm5hbWUiOiIiLCJwZXJtaXNzaW9uIjoicnciLCJhcHBfbmFtZSI6ImRhbmNhc3ZpIn0.tRzvYrltqIH9ZTbL4VSm-XvRANxXkJqa5IKdY6lJSdM'
const APITOKEN = 'Token 4dd4144783a2c97ba8008224285f64e27ddb82fd';

@Injectable({ providedIn: 'root' })
export class SeaTableDBService {
    constructor(private http: HttpClient) {

    }
    
    
    buscarProjetos() {
        const httpOptions = this.setHeaders();
        let tableId = 'c169f981-7e85-4076-babd-15d772e4f51a';
        let tableName = 'Projects';
                
        return this.http.get(`${URL}${tableId}/rows/?table_name=${tableName}`, httpOptions)
        .pipe(map((dados: STProjectsWrapper<STProjectsDTO>) => dados));
    }
    
    private setHeaders() {
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Authorization': BASETOKEN
                }
            )
        };

        return httpOptions;
    }

    buscarNovoBaseToken() {
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Accept': 'application/json; charset=utf-8; indent=4',
                    'Authorization': APITOKEN
                }
            )
        };

        return this.http.get(`https://cloud.seatable.io/api/v2.1/dtable/app-access-token/`, httpOptions)
        .pipe(map((dados) => dados));
    }
}