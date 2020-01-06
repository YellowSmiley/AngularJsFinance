import * as angular from "angular";
import "./account.scss";
import accounts from "../accounts/accounts.module";
import incomeExpenseTable from "../incomeExpenseTable/incomeExpenseTable.module";
import { AccountControllerConstructor } from "./account.controller";

export default angular
  .module("account", [accounts.name, incomeExpenseTable.name])
  .component("account", {
    template: require("./account.template.html"),
    controller: AccountControllerConstructor
  });
