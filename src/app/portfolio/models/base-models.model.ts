export class BaseWrapperDTO<T> {
    msg: string;
    status: number;
    data: T;
}

export class PokemonWrapper<T> {
    results: T;
}

export class PokemonDTO {
    name: string;
    sprites: PokemonSpritesDTO;
}

export class PokemonSpritesDTO {
    front_default: string;
}
