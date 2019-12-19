import * as angular from "angular";
import "./overview.scss";
import { OverviewController } from "./overview.controller";

export default angular.module("overview", []).component("overview", {
  template: require("./overview.template.html"),
  controller: ["$scope", "peopleService", OverviewController]
});
