import * as angular from "angular";
import "./person.scss";
import people from "../people/people.module";
import accounts from "../accounts/accounts.module";
import { PersonControllerConstructor } from "./person.controller";

export default angular
  .module("person", [people.name, accounts.name])
  .component("person", {
    template: require("./person.template.html"),
    controller: PersonControllerConstructor
  });
