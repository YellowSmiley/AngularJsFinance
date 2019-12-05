import angular from "angular";
import { IncomeExpenseTableController } from "./incomeExpenseTable.controller";
import { incomeExpenseTableFactory } from "./incomeExpenseTable.factory";

export interface IIncomeExpense {
  id: number;
  name: string;
  amount: number;
  notes: string;
}

export default angular
  .module("incomeExpenseTable", [])
  .factory("incomeTableFactory", incomeExpenseTableFactory)
  .factory("expenseTableFactory", incomeExpenseTableFactory)
  .component("incomeExpenseTable", {
    template: require("./incomeExpenseTable.template.html"),
    controller: [
      "$scope",
      "incomeTableFactory",
      "expenseTableFactory",
      IncomeExpenseTableController
    ]
  });
