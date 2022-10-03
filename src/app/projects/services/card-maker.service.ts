import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PokemonDTO, PokemonWrapper } from "src/app/portfolio/models/base-models.model";

@Injectable({ providedIn: 'root' })
export class CardMakerService {
    constructor(private http: HttpClient) {
    }

    getAllPokemon() {
        return this.http.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=905')
        .pipe(map((dados:PokemonWrapper<PokemonDTO[]>) => dados));
    }

    getPokemonByName(name) {
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .pipe(map((dados:PokemonDTO) => dados));
    }
}