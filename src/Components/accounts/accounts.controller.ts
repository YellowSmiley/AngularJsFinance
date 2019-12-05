import { IScope } from "angular";
import { Account } from "../account/account.module";
import { IAccountsService } from "./accounts.service";

export interface IAccountsControllerScope extends IScope {
  accounts: Account[];
  remove: (id: number) => void;
  add: () => void;
  save: () => void;
}

export function accountsController(
  $scope: IAccountsControllerScope,
  accountsService: IAccountsService
) {
  $scope.accounts = accountsService.accounts;

  $scope.remove = function(id) {
    accountsService.remove(id);
  };

  $scope.add = function() {
    accountsService.add();
  };

  $scope.save = function() {
    accountsService.save();
  };
}
