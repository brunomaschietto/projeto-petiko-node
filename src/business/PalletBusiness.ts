import { PalletDataBase } from "../database/PalletDataBase";
import { SignupInputDTO } from "../dtos/palletDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { Pallet } from "../models/Pallet";

export class PalletBusiness {
  constructor(private palletDataBase: PalletDataBase) {}
  public signup = async (input: SignupInputDTO): Promise<void> => {
    const { cpf, telefone, email, imagem } = input;

    if (typeof cpf !== "string") {
      throw new BadRequestError("'name' deve ser string");
    }

    if (typeof telefone !== "string") {
      throw new BadRequestError("'telefone' deve ser string");
    }

    if (typeof email !== "string") {
      throw new BadRequestError("'email' deve ser string");
    }

    if (typeof imagem !== "string") {
      throw new BadRequestError("'imagem' deve ser string");
    }

    const newPallet = new Pallet(cpf, telefone, email, imagem);

    const palletDB = newPallet.toDBModel();

    await this.palletDataBase.insert(palletDB);
  };
  public getPallets = async () => {
    const palletsDB = await this.palletDataBase.getPallets();
    
    const pallets = palletsDB.map((palletDB) => {
      return new Pallet(
        palletDB.cpf,
        palletDB.telefone,
        palletDB.email,
        palletDB.imagem
      );
    });
    return pallets
  };
}
