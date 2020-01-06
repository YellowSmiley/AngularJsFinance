import * as angular from "angular";
import "./people.scss";
import { peopleService } from "./people.service";
import { PeopleControllerConstructor } from "./people.controller";

export default angular
  .module("people", [])
  .service("peopleService", [peopleService])
  .component("people", {
    template: require("./people.template.html"),
    controller: PeopleControllerConstructor
  });
