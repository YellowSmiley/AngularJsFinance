import * as angular from "angular";
import ngRoute from "angular-route";

// export const Person =
export default angular.module("person", [ngRoute]).component("person", {
  template: "Component {{$ctrl.name + $ctrl.id}}!",
  // templateUrl: "person.html",
  controller: [
    "$routeParams",
    function PersonController($routeParams) {
      this.name = "person";
      this.id = $routeParams.id;
    }
  ]
});
