import { IScope } from "angular";
import { peopleService } from "../Components/people/people.service";

interface IAppControllerScope extends IScope {
  saveStateToCache: () => void;
}

class AppController {
  constructor($scope: IAppControllerScope, peopleService: peopleService) {
    $scope.saveStateToCache = function() {
      console.log("saveStateToCache");
      peopleService.save();
    };
  }
}

export const AppControllerConstructor = [
  "$scope",
  "peopleService",
  AppController
];
