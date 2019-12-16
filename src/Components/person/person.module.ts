import * as angular from "angular";
import "./person.scss";
import people from "../people/people.module";
import accounts from "../accounts/accounts.module";
import { Account } from "../account/account.module";
import { PersonController } from "./person.controller";

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

export default angular
  .module("person", [people.name, accounts.name])
  .component("person", {
    template: require("./person.template.html"),
    controller: [
      "$scope",
      "$routeParams",
      "peopleService",
      "accountsService",
      PersonController
    ]
  });
