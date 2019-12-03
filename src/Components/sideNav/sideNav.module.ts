import * as angular from "angular";
import accounts from "../accounts/accounts.module";

import { sideNavController } from "./sideNav.controller";

export default angular.module("sideNav", [accounts.name]).component("sideNav", {
  template: require("./sideNav.template.html"),
  controller: ["$scope", "accountsService", sideNavController]
});
