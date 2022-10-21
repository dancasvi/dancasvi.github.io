import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AnimeQuotesService {
    constructor(private http: HttpClient) {
    }
    
    getAvailableAnimes() {
        return this.http.get(`https://animechan.vercel.app/api/available/anime`)
        .pipe(map((dados:string[]) => dados));
    }
}