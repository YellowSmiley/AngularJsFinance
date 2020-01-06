import { ICacheObject } from "angular";
import { Account } from "../account/account.controller";

export class accountsService {
  public accounts: Account[];

  constructor(private accountsCache: ICacheObject) {
    this.accounts = JSON.parse(localStorage.getItem("accounts") || "[]");
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
