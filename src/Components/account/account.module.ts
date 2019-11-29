import * as angular from "angular";
import ngRoute from "angular-route";
import "./account.scss";

export default angular.module("account", [ngRoute]).component("account", {
  template: require("./account.template.html"),
  controller: [
    "$routeParams",
    function AccountController($routeParams) {
      this.name = "account";
      this.id = $routeParams.id;
    }
  ]
});
