import { Account } from "../account/account.controller";
import { postData, getAll } from "../../Utils/fetchHelper";
import { IRootScopeService } from "angular";

export class accountsService {
  public accounts: Account[];

  constructor($rootScope: IRootScopeService) {
    this.accounts = [];
    const cachedAccounts = JSON.parse(localStorage.getItem("accounts") || "[]");
    if (cachedAccounts.length === 0) {
      getAll("http://localhost:57111/api/Accounts").then(res => {
        this.setAccounts(res);
        $rootScope.$digest();
      });
      this.accounts.length > 0 &&
        localStorage.setItem("accounts", JSON.stringify(this.accounts));
    } else {
      this.setAccounts(cachedAccounts);
    }
  }

  private setAccounts(accounts: Account[]) {
    accounts.length > 0 &&
      accounts.forEach((acc: Account) => {
        this.accounts.push(
          new Account(acc.id, acc.name, acc.incomes, acc.expenses)
        );
      });
    console.log(this.accounts);
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
    postData("http://localhost:57111/api/Accounts", this.accounts);
  }
}
