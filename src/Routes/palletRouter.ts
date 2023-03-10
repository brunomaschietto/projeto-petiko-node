import express from "express";
import { PalletBusiness } from "../business/PalletBusiness";
import { PalletController } from "../controller/PalletController";
import { PalletDataBase } from "../database/PalletDataBase";

export const palletRouter = express.Router();

const palletController = new PalletController(
  new PalletBusiness(
    new PalletDataBase()
  )
);

palletRouter.post("/signup", palletController.signup);