import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";
import {Waiter} from "../types/waiter";

@Injectable()
export class WaiterService {
  constructor(public storage: Storage) {
  }

  public get() {
    return this.storage.get('waiters');
  }

  public save(waiters: Array<Waiter>) {
    this.storage.set('waiters', waiters);
  }

}
