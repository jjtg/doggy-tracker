import { v4 as uuidv4 } from 'uuid';

export default class Food {
  uuid = uuidv4();

  type = undefined;

  amount = undefined;

  time = undefined;

  constructor(obj) {
    if (!obj) return;
    if (obj.uuid) this.uuid = obj.uuid;
    if (obj.type) this.type = obj.type;
    if (obj.amount) this.amount = obj.amount;
    if (obj.time) this.time = obj.time;
  }
}
