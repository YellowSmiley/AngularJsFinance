import * as angular from "angular";
import ngRoute from "angular-route";

// export const Overview =
export default angular.module("overview", [ngRoute]).component("overview", {
  // templateUrl: "overview.html",
  template: "Component {{$ctrl.name}}!",
  controller: function OverviewController() {
    this.name = "overview";
  }
});
