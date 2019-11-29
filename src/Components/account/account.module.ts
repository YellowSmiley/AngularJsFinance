import * as angular from "angular";
import ngRoute from "angular-route";

export default angular.module("account", [ngRoute]).component("account", {
  template: "Component {{$ctrl.name + $ctrl.id}}!",
  // templateUrl: "account.html",
  controller: [
    "$routeParams",
    function AccountController($routeParams) {
      this.name = "account";
      this.id = $routeParams.id;
    }
  ]
});
