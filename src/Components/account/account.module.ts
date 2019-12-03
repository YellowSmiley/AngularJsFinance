import * as angular from "angular";
import "./account.scss";
import accounts from "../accounts/accounts.module";
import { IScope } from "angular";
import { AccountController } from "./account.controller";

// interface AccountControllerScope extends ng.IScope {
//   master: Account;
//   account: Account;
//   update: (account: Account) => void;
//   reset: () => void;
// }

interface IIncomeExpense {
  id: number;
  name: string;
  amount: number;
  notes: string;
}

// function IncomeController($scope: AccountControllerScope) {
//   $scope.master = {} as Account;
//   $scope.update = function(account: Account) {
//     $scope.master = angular.copy(account);
//   };
//   $scope.reset = function() {
//     $scope.account = angular.copy($scope.master);
//   };
//   $scope.reset();
// }

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

export default angular.module("account", [accounts.name]).component("account", {
  template: require("./account.template.html"),
  controller: ["$scope", "$routeParams", "accountsService", AccountController]
});
// .controller("IncomeController", ["$scope", IncomeController]);
