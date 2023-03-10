import express from "express";
import cors from "cors";
import { palletRouter } from "./Routes/palletRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => console.log("Server rodando na porta 3003"));

app.use("/pallet", palletRouter)

