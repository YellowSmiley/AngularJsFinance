import * as angular from "angular";

// export const Overview =
export default angular.module("overview", []).component("overview", {
  // templateUrl: "../views/overview.html"
  template: "Component {{$ctrl.name}}!",
  controller: function GreetUserController() {
    this.name = "overview";
  }
});
