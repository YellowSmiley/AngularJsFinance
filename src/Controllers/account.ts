import * as angular from "angular";

angular.module("account", ["ngRoute"]).component("account", {
  templateUrl: "../views/account.html",
  controller: [
    "$routeParams",
    function AccountController($routeParams) {
      this.accountId = $routeParams.accountId;
    }
  ]
});
