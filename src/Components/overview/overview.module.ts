import * as angular from "angular";
import "./overview.scss";
import { OverviewControllerConstructor } from "./overview.controller";

export default angular.module("overview", []).component("overview", {
  template: require("./overview.template.html"),
  controller: OverviewControllerConstructor
});
