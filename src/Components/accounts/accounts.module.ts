import * as angular from "angular";
import "./accounts.scss";
import { ICacheFactoryService } from "angular";
import { accountsController } from "./accounts.controller";
import { accountsService } from "./accounts.service";

function accountsCache($cacheFactory: ICacheFactoryService) {
  return $cacheFactory("accountsCache");
}

export default angular
  .module("accounts", [])
  .factory("accountsCache", ["$cacheFactory", accountsCache])
  .service("accountsService", ["accountsCache", accountsService])
  .component("accounts", {
    template: require("./accounts.template.html"),
    controller: ["$scope", "accountsService", accountsController]
  });
