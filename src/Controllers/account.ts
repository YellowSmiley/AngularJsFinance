import * as angular from "angular";

export default angular.module("account", []).component("account", {
  template: "Component {{$ctrl.name}}!",
  controller: function GreetUserController() {
    this.name = "account";
  }
  // templateUrl: "../views/account.html",
  // controller: [
  //   "$routeParams",
  //   function AccountController($routeParams) {
  //     this.accountId = $routeParams.accountId;
  //   }
  // ]
});
