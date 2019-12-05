import { IAccountsService } from "../accounts/accounts.service";
import { IScope } from "angular";
import { Account } from "./account.module";
import { IIncomeExpenseTableFactory } from "../incomeExpenseTable/incomeExpenseTable.factory";

interface IAccountControllerScope extends IScope {
  account: Account;
  addIncome: () => void;
  removeIncome: (id: number) => void;
  addExpense: () => void;
  removeExpense: (id: number) => void;
}

interface IAccountControllerRouteParamsService
  extends ng.route.IRouteParamsService {
  id: string;
}

export function AccountController(
  $scope: IAccountControllerScope,
  $routeParams: IAccountControllerRouteParamsService,
  accountsService: IAccountsService,
  incomeTableFactory: IIncomeExpenseTableFactory,
  expenseTableFactory: IIncomeExpenseTableFactory
) {
  $scope.account = accountsService.accounts.find(
    acc => acc.id === parseInt($routeParams.id)
  );
  $scope.addIncome = function() {
    incomeTableFactory.add($scope.account);
  };
  $scope.removeIncome = function(id) {
    incomeTableFactory.remove($scope.account, id);
  };
  $scope.addExpense = function() {
    expenseTableFactory.add($scope.account);
  };
  $scope.removeExpense = function(id) {
    expenseTableFactory.remove($scope.account, id);
  };
}
