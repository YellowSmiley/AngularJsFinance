import { IScope } from "angular";
import { peopleService } from "./people.service";
import { Person } from "../person/person.controller";

export interface IPeopleControllerScope extends IScope {
  people: Person[];
  remove: (id: number) => void;
  add: () => void;
  save: () => void;
}
class PeopleController {
  constructor($scope: IPeopleControllerScope, peopleService: peopleService) {
    $scope.people = peopleService.people;

    $scope.remove = function(id) {
      peopleService.remove(id);
    };

    $scope.add = function() {
      peopleService.add();
    };

    $scope.save = function() {
      peopleService.save();
    };
  }
}

export const PeopleControllerConstructor = [
  "$scope",
  "peopleService",
  PeopleController
];
