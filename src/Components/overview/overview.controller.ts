import { IScope } from "angular";
import { peopleService } from "../people/people.service";
import { Person } from "../person/person.controller";

interface IOverviewControllerScope extends IScope {
  people: Person[];
  totalGross: () => number;
  totalExpenses: () => number;
  totalNet: () => number;
}

class OverviewController {
  constructor($scope: IOverviewControllerScope, peopleService: peopleService) {
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
}

export const OverviewControllerConstructor = [
  "$scope",
  "peopleService",
  OverviewController
];
