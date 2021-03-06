import { IScope } from "angular";
import { Account } from "../account/account.controller";
import "./sideNav.scss";
import { accountsService } from "../accounts/accounts.service";
import { peopleService } from "../people/people.service";
import { Person } from "../person/person.controller";

interface INavControllerScope extends IScope {
  accounts: Account[];
  people: Person[];
}

class SideNavController {
  constructor(
    $scope: INavControllerScope,
    accountsService: accountsService,
    peopleService: peopleService
  ) {
    $scope.accounts = accountsService.accounts;
    $scope.people = peopleService.people;
  }
}

export const SideNavControllerConstructor = [
  "$scope",
  "accountsService",
  "peopleService",
  SideNavController
];
