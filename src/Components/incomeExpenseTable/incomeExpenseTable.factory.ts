import { IModule } from "angular";
import { IIncomeExpense } from "./incomeExpenseTable.controller";

export interface IIncomeExpenseTableFactory extends IModule {
  add: (entries: IIncomeExpense[]) => void;
  remove: (entries: IIncomeExpense[], id: number) => void;
}

export function incomeExpenseTableFactory() {
  return {
    add: function(entries) {
      const newId: number =
        entries.length > 0 ? entries[entries.length - 1].id + 1 : 1;
      entries.push({ id: newId, name: "", amount: 0, notes: "" });
    },
    remove: function(entries, id) {
      const i = entries.findIndex(acc => acc.id === id);
      entries.splice(i, 1);
    }
  };
}
