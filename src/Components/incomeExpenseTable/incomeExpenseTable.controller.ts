import { IScope } from "angular";
import { Account } from "../account/account.module";
import { IIncomeExpenseTableFactory } from "./incomeExpenseTable.factory";

interface IIncomeExpenseTableControllerScope extends IScope {
  addExpense: (account: Account) => void;
  removeExpense: (account: Account, id: number) => void;
  addIncome: (account: Account) => void;
  removeIncome: (account: Account, id: number) => void;
}

export function IncomeExpenseTableController(
  $scope: IIncomeExpenseTableControllerScope,
  expenseTableFactory: IIncomeExpenseTableFactory,
  incomeTableFactory: IIncomeExpenseTableFactory
) {
  $scope.addExpense = function(account) {
    expenseTableFactory.add(account);
  };
  $scope.removeExpense = function(account, id) {
    expenseTableFactory.remove(account, id);
  };
  $scope.addIncome = function(account) {
    incomeTableFactory.add(account);
  };
  $scope.removeIncome = function(account, id) {
    incomeTableFactory.remove(account, id);
  };
}
