import { IScope } from "angular";
import { peopleService } from "../Components/people/people.service";
import { accountsService } from "../Components/accounts/accounts.service";

interface IAppControllerScope extends IScope {
  saveStateToCache: () => void;
}

class AppController {
  constructor(
    $scope: IAppControllerScope,
    peopleService: peopleService,
    accountsService: accountsService
  ) {
    $scope.saveStateToCache = function() {
      peopleService.save();
      accountsService.save();
    };
  }
}

export const AppControllerConstructor = [
  "$scope",
  "peopleService",
  "accountsService",
  AppController
];
