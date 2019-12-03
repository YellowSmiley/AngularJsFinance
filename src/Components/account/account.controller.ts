import { IAccountsServiceModule } from "../accounts/accounts.service";
import { IScope } from "angular";
import { Account } from "./account.module";

interface IAccountControllerScope extends IScope {
  account: Account;
  save: () => void;
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
  $scope.save = function() {};
}
