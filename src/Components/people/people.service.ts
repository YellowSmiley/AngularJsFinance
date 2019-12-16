import { IModule, ICacheObject } from "angular";
import { Person } from "../person/person.module";

export interface IPeopleService extends IModule {
  people: Person[];
  remove: (id: number) => void;
  add: () => void;
  save: () => void;
}

export function peopleService(peopleCache: ICacheObject) {
  const people = peopleCache.get("people") as Person[];
  this.people = !!people ? people : [];
  this.remove = function(id) {
    const i = this.people.findIndex(acc => acc.id === id);
    this.people.splice(i, 1);
  };

  this.add = function() {
    const newId: number =
      this.people.length > 0 ? this.people[this.people.length - 1].id + 1 : 1;
    this.people.push(new Person(newId, "New Person", [], []));
  };

  this.save = function() {
    peopleCache.put("people", this.people);
  };
}
