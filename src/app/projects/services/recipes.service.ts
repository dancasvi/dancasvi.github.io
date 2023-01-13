import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ReceitasWrapper, Recipe } from "../models/receitas-meyry.model";

const URL = 'http://dancasvi.com.br:21075';

@Injectable({ providedIn: 'root' })
export class RecipeService { 
    constructor(private http: HttpClient) {
    }

    getAllRecipes() {
        return this.http.get(`${URL}/recipes`)
        .pipe(map((dados:ReceitasWrapper<Recipe>) => dados));
    }

    saveImageRecipe(file:string) {
        let formData:FormData = new FormData();
        // formData.append('uploadFile', file, 'myBlob');
        // formData.append('teste', file.toString(), 'myBlob')
        // formData.append('uploadFile', file, file.name);
        // formData.append("reportProgress", "true");
        const httpOptions = {
            headers: new HttpHeaders({
            })
        };
        const body = { file: file };

        // return this.http.post(`${URL}/recipes`, formData, httpOptions)
        // .pipe(map((dados:ReceitasWrapper<Recipe>) => dados));

        return this.http.post(`${URL}/recipes`, body, httpOptions)
        .pipe(map((dados:ReceitasWrapper<Recipe>) => dados));
    }

    getImageRecipe(id = 1) {
        return this.http.get(`${URL}/recipes/${id}`)
        .pipe(map((dados:ReceitasWrapper<any>) => dados));
    }
}