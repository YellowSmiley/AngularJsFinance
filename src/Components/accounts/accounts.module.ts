import * as angular from "angular";
import "./accounts.scss";
import { AccountsControllerConstructor } from "./accounts.controller";
import { accountsService } from "./accounts.service";

export default angular
  .module("accounts", [])
  .service("accountsService", ["$rootScope", accountsService])
  .component("accounts", {
    template: require("./accounts.template.html"),
    controller: AccountsControllerConstructor
  });
