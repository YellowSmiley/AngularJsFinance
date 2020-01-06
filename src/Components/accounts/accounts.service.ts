import { ICacheObject } from "angular";
import { Account } from "../account/account.controller";

export class accountsService {
  public accounts: Account[];

  constructor() {
    const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");
    this.accounts = [];
    accounts.length > 0 &&
      accounts.forEach((acc: Account) => {
        this.accounts.push(
          new Account(acc.id, acc.name, acc.incomes, acc.expenses)
        );
      });
  }

  public remove(id) {
    const i = this.accounts.findIndex(acc => acc.id === id);
    this.accounts.splice(i, 1);
  }

  public add() {
    const newId: number =
      this.accounts.length > 0
        ? this.accounts[this.accounts.length - 1].id + 1
        : 1;
    this.accounts.push(new Account(newId, "New Account", [], []));
  }

  public save() {
    localStorage.setItem("accounts", JSON.stringify(this.accounts));
  }
}
