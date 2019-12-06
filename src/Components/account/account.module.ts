import * as angular from "angular";
import "./account.scss";
import accounts from "../accounts/accounts.module";
import incomeExpenseTable, {
  IIncomeExpense
} from "../incomeExpenseTable/incomeExpenseTable.module";
import { AccountController } from "./account.controller";

export class Account {
  public id: number;
  public name: string;
  public incomes: IIncomeExpense[];
  public expenses: IIncomeExpense[];
  constructor(
    id: number,
    name: string,
    incomes: IIncomeExpense[],
    expenses: IIncomeExpense[]
  ) {
    this.id = id;
    this.name = name;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  public get gross() {
    return this.incomes.reduce((total, { amount }) => total + amount, 0);
  }
  public get totalExpenses() {
    return this.expenses.reduce((total, { amount }) => total + amount, 0);
  }
  public get net() {
    return this.gross - this.totalExpenses;
  }
}

export default angular
  .module("account", [accounts.name, incomeExpenseTable.name])
  .component("account", {
    template: require("./account.template.html"),
    controller: ["$scope", "$routeParams", "accountsService", AccountController]
  });
