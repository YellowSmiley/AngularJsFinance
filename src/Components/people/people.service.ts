import { ICacheObject } from "angular";
import { Person } from "../person/person.controller";

export class peopleService {
  public people: Person[];
  constructor(private peopleCache: ICacheObject) {
    const people = peopleCache.get("people") as Person[];
    this.people = !!people ? people : [];
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
    this.peopleCache.put("people", this.people);
  }
}
