import angular, { IScope } from "angular";
import ngRoute from "angular-route";
import account from "./Components/account/account.module";
import { Account } from "./Components/account/account.module";
import overview from "./Components/overview/overview.module";
import person from "./Components/person/person.module";
import people from "./Components/people/people.module";
import accounts from "./Components/accounts/accounts.module";
import "./index.scss";
import { IAccountsServiceModule } from "./Components/accounts/accounts.service";

interface INavControllerScope extends IScope {
  accounts: Account[];
}

angular
  .module("app", [
    ngRoute,
    account.name,
    overview.name,
    person.name,
    people.name,
    accounts.name
  ])
  .config([
    "$routeProvider",
    function config($routeProvider) {
      $routeProvider
        .when("/overview", {
          template: "<overview></overview>"
        })
        .when("/accounts", {
          template: "<accounts></accounts>"
        })
        .when("/account/:id", {
          template: "<account></account>"
        })
        .when("/people", {
          template: "<people></people>"
        })
        .when("/person/:id", {
          template: "<person></person>"
        })
        .otherwise("/overview");
    }
  ])
  .controller("NavController", [
    "$scope",
    "accountsService",
    function(
      $scope: INavControllerScope,
      accountsService: IAccountsServiceModule
    ) {
      $scope.accounts = accountsService.accounts;
    }
  ])
  .controller("AngularWorkingController", function AngularWorkingController(
    $scope
  ) {
    $scope.working = "AngularJS working!";
  });
