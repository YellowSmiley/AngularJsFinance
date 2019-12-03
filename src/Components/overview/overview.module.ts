import * as angular from "angular";
import ngRoute from "angular-route";
import "./overview.scss";

export default angular.module("overview", [ngRoute]).component("overview", {
  template: require("./overview.template.html"),
  controller: function OverviewController() {
    this.name = "overview";
  }
});
