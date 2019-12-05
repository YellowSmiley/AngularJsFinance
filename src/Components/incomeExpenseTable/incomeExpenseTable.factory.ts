import { IModule } from "angular";
import { Account } from "../account/account.module";

export interface IIncomeExpenseTableFactory extends IModule {
  add: (account: Account) => void;
  remove: (account: Account, id: number) => void;
}

export function incomeExpenseTableFactory() {
  return {
    add: function(account) {
      const { incomes } = account;
      const newId: number =
        incomes.length > 0 ? incomes[incomes.length - 1].id + 1 : 1;
      incomes.push({ id: newId, name: "", amount: 0, notes: "" });
    },
    remove: function(account, id) {
      const { incomes } = account;
      const i = incomes.findIndex(acc => acc.id === id);
      incomes.splice(i, 1);
    }
  };
}
