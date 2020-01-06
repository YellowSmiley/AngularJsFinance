import { Person } from "../person/person.controller";
import { Account } from "../account/account.controller";

export class peopleService {
  public people: Person[];

  constructor() {
    this.people = [];
    const people = JSON.parse(localStorage.getItem("people") || "[]");
    people.length > 0 &&
      people.forEach((per: Person) => {
        const accounts = [];
        per.accounts.length > 0 &&
          per.accounts.forEach(acc =>
            accounts.push(
              new Account(acc.id, acc.name, acc.incomes, acc.expenses)
            )
          );
        this.people.push(new Person(per.id, per.name, accounts));
      });
  }

  public remove(id) {
    const i = this.people.findIndex(acc => acc.id === id);
    this.people.splice(i, 1);
  }

  public add() {
    const newId: number =
      this.people.length > 0 ? this.people[this.people.length - 1].id + 1 : 1;
    this.people.push(new Person(newId, "New Person", []));
  }

  public save() {
    localStorage.setItem("people", JSON.stringify(this.people));
  }
}
