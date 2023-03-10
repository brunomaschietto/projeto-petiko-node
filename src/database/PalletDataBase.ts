import { UserDB } from "../interfaces/types";
import { BaseDataBase } from "./BaseDataBase";

export class PalletDataBase extends BaseDataBase {
  public static TABLE_PALLET = "pallet";

  public insert = async (userDB: UserDB): Promise<void> => {
    await BaseDataBase.connection(PalletDataBase.TABLE_PALLET).insert(userDB);
  };
}
