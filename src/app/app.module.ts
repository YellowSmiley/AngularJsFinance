import angular from "angular";
import ngRoute from "angular-route";
import account from "../Components/account/account.module";
import overview from "../Components/overview/overview.module";
import person from "../Components/person/person.module";
import people from "../Components/people/people.module";
import accounts from "../Components/accounts/accounts.module";
import sideNav from "../Components/sideNav/sideNav.module";
import "../index.scss";
import { appConfig } from "./app.config";

angular
  .module("app", [
    ngRoute,
    account.name,
    person.name,
    people.name,
    accounts.name,
    sideNav.name,
    overview.name
  ])
  .config(["$routeProvider", appConfig])
  .controller("AngularWorkingController", function AngularWorkingController(
    $scope
  ) {
    $scope.working = "AngularJS working!";
  });
