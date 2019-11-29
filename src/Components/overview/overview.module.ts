import * as angular from "angular";
import ngRoute from "angular-route";

// export const Overview =
export default angular.module("overview", []).component("overview", {
  // templateUrl: "overview.html",
  template: "Component {{$ctrl.name + $ctrl.id}}!",
  controller: [
    "$routeParams",
    function OverviewController($routeParams) {
      this.name = "overview";
      this.id = $routeParams.id;
    }
  ]
});
