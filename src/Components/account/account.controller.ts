import { IAccountsServiceModule } from "../accounts/accounts.service";
import { IScope } from "angular";
import { Account } from "./account.module";

interface IAccountControllerScope extends IScope {
  account: Account;
  addIncome: () => void;
  removeIncome: (id: number) => void;
}

interface IAccountControllerRouteParamsService
  extends ng.route.IRouteParamsService {
  id: string;
}

export function AccountController(
  $scope: IAccountControllerScope,
  $routeParams: IAccountControllerRouteParamsService,
  accountsService: IAccountsServiceModule
) {
  $scope.account = accountsService.accounts.find(
    acc => acc.id === parseInt($routeParams.id)
  );
  $scope.addIncome = function() {
    const { incomes } = $scope.account;
    const newId: number =
      incomes.length > 0 ? incomes[incomes.length - 1].id + 1 : 1;
    incomes.push({ id: newId, name: "", amount: 0, notes: "" });
  };
  $scope.removeIncome = function(id) {
    const { incomes } = $scope.account;
    const i = incomes.findIndex(acc => acc.id === id);
    incomes.splice(i, 1);
  };
}
