import * as angular from "angular";

angular.module("person", ["ngRoute"]).component("person", {
  templateUrl: "../views/person.html",
  controller: [
    "$routeParams",
    function PersonController($routeParams) {
      this.personId = $routeParams.personId;
    }
  ]
});
