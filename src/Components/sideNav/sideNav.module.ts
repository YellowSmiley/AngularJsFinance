import * as angular from "angular";
import accounts from "../accounts/accounts.module";
import people from "../people/people.module";

import { SideNavControllerConstructor } from "./sideNav.controller";

export default angular
  .module("sideNav", [accounts.name, people.name])
  .component("sideNav", {
    template: require("./sideNav.template.html"),
    controller: SideNavControllerConstructor
  });
