import { IScope } from "angular";
import { Account } from "../account/account.module";
import "./sideNav.scss";
import { IAccountsService } from "../accounts/accounts.service";
import { IPeopleService } from "../people/people.service";
import { Person } from "../person/person.module";

interface INavControllerScope extends IScope {
  accounts: Account[];
  people: Person[];
}

export function sideNavController(
  $scope: INavControllerScope,
  accountsService: IAccountsService,
  peopleService: IPeopleService
) {
  $scope.accounts = accountsService.accounts;
  $scope.people = peopleService.people;
}
