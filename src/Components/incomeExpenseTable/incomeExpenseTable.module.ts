import angular from "angular";
import { IncomeExpenseTableController } from "./incomeExpenseTable.controller";
import { incomeExpenseTableFactory } from "./incomeExpenseTable.factory";

export default angular
  .module("incomeExpenseTable", [])
  .factory("incomeExpenseTableFactory", incomeExpenseTableFactory)
  .component("incomeExpenseTable", {
    template: require("./incomeExpenseTable.template.html"),
    controller: [
      "$scope",
      "incomeExpenseTableFactory",
      IncomeExpenseTableController
    ],
    bindings: {
      entries: "="
    }
  });
