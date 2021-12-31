export class ProjetoItem {
    id: number;
    nome: string;
    tecnologias: string[];
    imagem: string;

    constructor(id: number, nome: string, tecnologias: string[], imagem: string) {
        this.id = id;
        this.nome = nome;
        this.tecnologias = tecnologias;
        this.imagem = imagem;
    }
}