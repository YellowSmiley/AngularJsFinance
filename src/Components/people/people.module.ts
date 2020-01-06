import * as angular from "angular";
import "./people.scss";
import { ICacheFactoryService } from "angular";
import { peopleService } from "./people.service";
import { PeopleControllerConstructor } from "./people.controller";

function peopleCache($cacheFactory: ICacheFactoryService) {
  return $cacheFactory("peopleCache");
}

export default angular
  .module("people", [])
  .factory("peopleCache", ["$cacheFactory", peopleCache])
  .service("peopleService", ["peopleCache", peopleService])
  .component("people", {
    template: require("./people.template.html"),
    controller: PeopleControllerConstructor
  });
