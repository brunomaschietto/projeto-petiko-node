import { PalletDB } from "../interfaces/types";

export class Pallet {
  constructor(
    private cpf: string,
    private telefone: string,
    private email: string,
    private imagem: string
  ) {}
  public getCpf(): string {
    return this.cpf;
  }

  public setCpf(value: string) {
    this.cpf = value;
  }

  public getTelefone(): string {
    return this.telefone;
  }

  public setTelefone(value: string) {
    this.telefone = value;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(value: string) {
    this.email = value;
  }
  public getImagem(): string {
    return this.imagem;
  }

  public setImagem(value: string) {
    this.imagem = value;
  }
  public toDBModel(): PalletDB {
    return {
      cpf: this.cpf,
      telefone: this.telefone,
      email: this.email,
      imagem: this.imagem,
    };
  }
}
