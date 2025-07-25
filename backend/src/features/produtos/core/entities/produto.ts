import { PrecoNaoPodeSerMenorQueZeroException } from "../exceptions/PrecoNaoPodeSerMenorQueZero.exception";

export class Produto {
    private id: string | null;
    private nome: string;
    private preco: number;
    private descricao: string;

    private constructor(id: string | null, nome: string, preco: number, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }

    public static create(
        id: string | null,
        nome: string,
        preco: number,
        descricao: string,
    ): Produto {
        Produto.validaPreco(preco);
        return new Produto(id, nome, preco, descricao);
    }

    private static validaPreco(preco: number): void {
        if (preco <= 0) {
            throw new PrecoNaoPodeSerMenorQueZeroException('Preço inválido');
        }
    }

    public getId(): string | null {
        return this.id;
    }

    public setId(id: string | null): void {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getDescricao(): string {
        return this.descricao;
    }
}
