import * as angular from "angular";
import "./accounts.scss";
import { Account } from "../account/account.module";
import { IScope, ICacheFactoryService, ICacheObject, IModule } from "angular";

interface IAccountsControllerScope extends IScope {
  accounts: Account[];
  remove: (id: number) => void;
  add: () => void;
  save: () => void;
}

function accountsCache($cacheFactory: ICacheFactoryService) {
  return $cacheFactory("accountsCache");
}

interface IAccountsServiceModule extends IModule {
  accounts: Account[];
  setAccounts: (accounts: Account[]) => void;
}

function accountsService(accountsCache: ICacheObject) {
  const accountCache = accountsCache.get("accounts") as Account[];
  this.accounts = !!accountCache ? accountCache : [];
  this.setAccounts = function(accounts: Account[]) {
    this.accounts = accounts;
    accountsCache.put("accounts", this.accounts);
  };
}

function AccountsController(
  $scope: IAccountsControllerScope,
  accountsService: IAccountsServiceModule
) {
  $scope.accounts = [...accountsService.accounts];

  $scope.remove = function(id) {
    const i = $scope.accounts.findIndex(acc => acc.id === id);
    $scope.accounts.splice(i, 1);
  };

  $scope.add = function() {
    const newId: number =
      $scope.accounts.length > 0
        ? $scope.accounts[$scope.accounts.length - 1].id + 1
        : 1;
    $scope.accounts.push(new Account(newId, "New Account", [], []));
  };

  $scope.save = function() {
    accountsService.setAccounts($scope.accounts);
  };
}

export default angular
  .module("accounts", [])
  .factory("accountsCache", ["$cacheFactory", accountsCache])
  .service("accountsService", ["accountsCache", accountsService])
  .component("accounts", {
    template: require("./accounts.template.html"),
    controller: ["$scope", "accountsService", AccountsController]
  });
