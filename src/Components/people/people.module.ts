import * as angular from "angular";
import ngRoute from "angular-route";
import "./people.scss";

export default angular.module("people", [ngRoute]).component("people", {
  template: require("./people.template.html"),
  controller: function PeopleController() {
    this.name = "people";
  }
});
