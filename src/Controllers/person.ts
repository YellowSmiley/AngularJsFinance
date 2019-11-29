import * as angular from "angular";

// export const Person =
export default angular.module("person", []).component("person", {
  template: "Component {{$ctrl.name}}!",
  controller: function GreetUserController() {
    this.name = "person";
  }
  // templateUrl: "../views/person.html",
  // controller: [
  //   "$routeParams",
  //   function PersonController($routeParams) {
  //     this.personId = $routeParams.personId;
  //   }
  // ]
});
