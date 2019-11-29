/// <reference path="./angular-route.min.js" />
import * as angular from "angular";
import account from "./Controllers/account";
import overview from "./Controllers/overview";
import person from "./Controllers/person";
import "./index.scss";

const app = angular.module("app", [account.name, overview.name, person.name]);

app.controller("AngularWorkingCtrl", function AngularWorkingCtrl($scope) {
  $scope.working = "AngularJS working!";
});
