import { IScope } from "angular";
import { IPeopleService } from "../people/people.service";
import { Person } from "../person/person.module";

interface IOverviewControllerScope extends IScope {
  people: Person[];
  totalGross: () => number;
  totalExpenses: () => number;
  totalNet: () => number;
}

export function OverviewController(
  $scope: IOverviewControllerScope,
  peopleService: IPeopleService
) {
  $scope.people = peopleService.people;
  $scope.totalGross = function() {
    return $scope.people.reduce((total, person) => total + person.gross, 0);
  };
  $scope.totalExpenses = function() {
    return $scope.people.reduce(
      (total, person) => total + person.totalExpenses,
      0
    );
  };
  $scope.totalNet = function() {
    return $scope.people.reduce((total, person) => total + person.net, 0);
  };
}
