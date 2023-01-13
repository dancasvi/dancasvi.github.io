import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { PokemonDTO, PokemonWrapperDTO } from "../models/pokedex.model";
import { SuperTrunfoWrapper } from "../models/super-trunfo.model";

const url = "https://pokeapi.co/api/v2/pokemon";

@Injectable({ providedIn: 'root' })
export class PokedexService { 
    constructor(private http: HttpClient) {
    }

    getAllPokemon(limit) {
        return this.http.get(`${url}?limit=${limit}&offset=0`)
        .pipe(map((dados:PokemonWrapperDTO<PokemonDTO>) => dados));
        //Limit: Quantos deve trazer
        //Offset: A partir de qual indice
        //Ex: ?limit=10&offset=0
        // Traz 10 pokes, iniciando do 0 (Bulbasaur#1 até Caterpie#9)
    }

    getPokemonByName(name) {
        return this.http.get(`${url}/${name}`)
        .pipe(map((dados) => dados));
    }
}