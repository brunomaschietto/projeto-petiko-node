import { PalletDB } from "../interfaces/types";
import { BaseDataBase } from "./BaseDataBase";

export class PalletDataBase extends BaseDataBase {
  public static TABLE_PALLET = "pallet";

  public insert = async (palletDB: PalletDB): Promise<void> => {
    await BaseDataBase.connection(PalletDataBase.TABLE_PALLET).insert(palletDB);
  };

  public getPallets = async () => {
    const result: PalletDB[] = await BaseDataBase.connection(
      PalletDataBase.TABLE_PALLET
    );
    return result;
  };
}
