import { IScope } from "angular";
import { Account } from "../account/account.controller";
import { accountsService } from "./accounts.service";

export interface IAccountsControllerScope extends IScope {
  accounts: Account[];
  remove: (id: number) => void;
  add: () => void;
  save: () => void;
}

class AccountsController {
  constructor(
    $scope: IAccountsControllerScope,
    accountsService: accountsService
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
}

export const AccountsControllerConstructor = [
  "$scope",
  "accountsService",
  AccountsController
];
