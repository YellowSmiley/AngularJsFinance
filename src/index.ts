/// <reference path="..node_modules\angular-route\angular-route.js" />
import * as angular from "angular";
import "./index.scss";

const app = angular.module("app", []);

app.controller("AngularWorkingCtrl", function AngularWorkingCtrl($scope) {
  $scope.working = "AngularJS working!";
});
