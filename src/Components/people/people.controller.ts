import { IScope } from "angular";
import { IPeopleService } from "./people.service";
import { Person } from "../person/person.module";

export interface IPeopleControllerScope extends IScope {
  people: Person[];
  remove: (id: number) => void;
  add: () => void;
  save: () => void;
}

export function peopleController(
  $scope: IPeopleControllerScope,
  peopleService: IPeopleService
) {
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
