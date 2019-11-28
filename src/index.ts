import * as angular from "angular";
import "angular-route";
import "./index.scss";

const app = angular.module("app", []);

app.config([
  "$routeProvider",
  function config($routeProvider) {
    $routeProvider
      .when("/overview", {
        template: "<overview></overview>"
      })
      .when("/person/:personId", {
        template: "<person></person>"
      })
      .when("/account/:accountId", {
        template: "<account></account>"
      })
      .otherwise("/overview");
  }
]);

app.controller("GreetingController", [
  "$scope",
  function($scope) {
    $scope.greeting = "Hola!";
  }
]);

app.controller("DoubleController", [
  "$scope",
  function($scope) {
    $scope.double = function(value) {
      return value * 2;
    };
  }
]);

app
  .controller("MyController", [
    "$scope",
    "notify",
    function($scope, notify) {
      $scope.callNotify = function(msg) {
        notify(msg);
      };
    }
  ])
  .factory("notify", [
    "$window",
    function(win) {
      var msgs = [];
      return function(msg) {
        msgs.push(msg);
        if (msgs.length === 3) {
          win.alert(msgs.join("\n"));
          msgs = [];
        }
      };
    }
  ]);

app.controller("ExampleController", [
  "$scope",
  function($scope) {
    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
  }
]);

angular
  .module("docsSimpleDirective", [])
  .controller("Controller", [
    "$scope",
    function($scope) {
      $scope.customer = {
        name: "Naomi",
        address: "1600 Amphitheatre"
      };
    }
  ])
  .directive("myCustomer", function() {
    return {
      template: "Name: {{customer.name}} Address: {{customer.address}}"
    };
  });
