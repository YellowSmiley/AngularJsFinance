import { IScope } from "angular";
import { Account } from "../account/account.module";
import { IAccountsServiceModule } from "../accounts/accounts.service";
import "./sideNav.scss";

interface INavControllerScope extends IScope {
  accounts: Account[];
}

export function sideNavController(
  $scope: INavControllerScope,
  accountsService: IAccountsServiceModule
) {
  $scope.accounts = accountsService.accounts;
}
