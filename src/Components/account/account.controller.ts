import { accountsService } from "../accounts/accounts.service";
import { IScope } from "angular";
import { IIncomeExpense } from "../incomeExpenseTable/incomeExpenseTable.controller";

interface IAccountControllerScope extends IScope {
  account: Account;
}

interface IAccountControllerRouteParamsService
  extends ng.route.IRouteParamsService {
  id: string;
}

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

class AccountController {
  constructor(
    $scope: IAccountControllerScope,
    $routeParams: IAccountControllerRouteParamsService,
    accountsService: accountsService
  ) {
    $scope.account = accountsService.accounts.find(
      acc => acc.id === parseInt($routeParams.id)
    );
  }
}

export const AccountControllerConstructor = [
  "$scope",
  "$routeParams",
  "accountsService",
  AccountController
];
