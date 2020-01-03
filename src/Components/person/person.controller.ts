import { peopleService } from "../people/people.service";
import { IScope } from "angular";
import { Account } from "../account/account.controller";
import { accountsService } from "../accounts/accounts.service";

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

export class Person {
  public id: number;
  public name: string;
  public accounts: Account[];
  constructor(id: number, name: string, accounts: Account[]) {
    this.id = id;
    this.name = name;
    this.accounts = accounts;
  }
  public get gross() {
    return this.accounts.reduce((total, { gross }) => total + gross, 0);
  }
  public get totalExpenses() {
    return this.accounts.reduce(
      (total, { totalExpenses }) => total + totalExpenses,
      0
    );
  }
  public get net() {
    return this.accounts.reduce((total, { net }) => total + net, 0);
  }
  private getAccountFromId(id: number) {
    return this.accounts.find(acc => acc.id === id);
  }
  public allocateAccount(account: Account) {
    if (!this.getAccountFromId(account.id)) {
      this.accounts.push(account);
    }
  }
  public removeAccount(id: number) {
    const account = this.getAccountFromId(id);
    const accountIndex = this.accounts.indexOf(account);
    this.accounts.splice(accountIndex, 1);
  }
}

export class PersonController {
  constructor(
    $scope: IPersonControllerScope,
    $routeParams: IPersonControllerRouteParamsService,
    peopleService: peopleService,
    accountsService: accountsService
  ) {
    $scope.accounts = accountsService.accounts;
    $scope.person = peopleService.people.find(
      per => per.id === parseInt($routeParams.id)
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
}
