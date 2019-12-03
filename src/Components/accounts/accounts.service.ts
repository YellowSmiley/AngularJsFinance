import { IModule, ICacheObject } from "angular";
import { Account } from "../account/account.module";

export interface IAccountsServiceModule extends IModule {
  accounts: Account[];
  remove: (id: number) => void;
  add: () => void;
  save: () => void;
}

export function accountsService(accountsCache: ICacheObject) {
  const accountCache = accountsCache.get("accounts") as Account[];
  this.accounts = !!accountCache ? accountCache : [];
  //   this.accounts = [new Account(1, "New Account", [], [])];
  this.remove = function(id) {
    const i = this.accounts.findIndex(acc => acc.id === id);
    this.accounts.splice(i, 1);
  };

  this.add = function() {
    const newId: number =
      this.accounts.length > 0
        ? this.accounts[this.accounts.length - 1].id + 1
        : 1;
    this.accounts.push(new Account(newId, "New Account", [], []));
  };

  this.save = function() {
    accountsCache.put("accounts", this.accounts);
  };
}
