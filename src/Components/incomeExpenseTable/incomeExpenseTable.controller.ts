import { IScope } from "angular";
import { IIncomeExpenseTableFactory } from "./incomeExpenseTable.factory";

export interface IIncomeExpense {
  id: number;
  name: string;
  amount: number;
  notes: string;
}

interface IIncomeExpenseTableControllerScope extends IScope {
  add: (entries: IIncomeExpense[]) => void;
  remove: (entries: IIncomeExpense[], id: number) => void;
}

class IncomeExpenseTableController {
  constructor(
    $scope: IIncomeExpenseTableControllerScope,
    incomeExpenseTableFactory: IIncomeExpenseTableFactory
  ) {
    $scope.add = function(entries) {
      incomeExpenseTableFactory.add(entries);
    };
    $scope.remove = function(entries, id) {
      incomeExpenseTableFactory.remove(entries, id);
    };
  }
}

export const IncomeExpenseTableControllerConstructor = [
  "$scope",
  "incomeExpenseTableFactory",
  IncomeExpenseTableController
];
