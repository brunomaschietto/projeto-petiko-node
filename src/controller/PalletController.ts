import { Request, Response } from "express";
import { PalletBusiness } from "../business/PalletBusiness";
import { SignupInputDTO } from "../dtos/palletDTO";

export class PalletController {
  constructor(private palletBusiness: PalletBusiness) {}
  public signup = async (req: Request, res: Response) => {
    try {
      const input: SignupInputDTO = {
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        email: req.body.email,
        imagem: req.body.imagem,
      };
      await this.palletBusiness.signup(input);
      const output = "Cadastrado com sucesso";
      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };
  public getPallets = async (req: Request, res: Response) => {
    try {
      const output = await this.palletBusiness.getPallets();
      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (req.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };
}
