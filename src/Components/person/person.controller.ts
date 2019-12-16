import { IPeopleService } from "../people/people.service";
import { IScope } from "angular";
import { Person } from "./person.module";
import { Account } from "../account/account.module";
import { IAccountsService } from "../accounts/accounts.service";

interface IPersonControllerScope extends IScope {
  accounts: Account[];
  person: Person;
  allocateAccount: (id: string) => void;
  removeAccount: (id: string) => void;
}

interface IPersonControllerRouteParamsService
  extends ng.route.IRouteParamsService {
  id: string;
}

export function PersonController(
  $scope: IPersonControllerScope,
  $routeParams: IPersonControllerRouteParamsService,
  peopleService: IPeopleService,
  accountsService: IAccountsService
) {
  $scope.accounts = accountsService.accounts;
  $scope.person = peopleService.people.find(
    acc => acc.id === parseInt($routeParams.id)
  );
  $scope.allocateAccount = function(id) {
    const account = $scope.accounts.find(acc => acc.id === parseInt(id));
    if (account) {
      $scope.person.allocateAccount(account);
    }
  };
  $scope.removeAccount = function(id) {
    $scope.person.removeAccount(parseInt(id));
  };
}
