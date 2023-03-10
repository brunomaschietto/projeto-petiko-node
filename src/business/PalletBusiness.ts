import { PalletDataBase } from "../database/PalletDataBase";
import { SignupInputDTO } from "../dtos/palletDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { User } from "../models/User";

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

    const newUser = new User(cpf, telefone, email, imagem);

    const userDB = newUser.toDBModel();

    await this.palletDataBase.insert(userDB);
  };
}
