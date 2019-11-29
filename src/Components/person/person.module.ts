import * as angular from "angular";
import ngRoute from "angular-route";

export default angular.module("person", [ngRoute]).component("person", {
  template: require("./person.template.html"),
  controller: [
    "$routeParams",
    function PersonController($routeParams) {
      this.name = "person";
      this.id = $routeParams.id;
    }
  ]
});
