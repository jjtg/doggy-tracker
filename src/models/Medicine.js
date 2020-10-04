import { v4 as uuidv4 } from 'uuid';

export default class Medicine {
  uuid = uuidv4();

  name = undefined;

  dosage = undefined;

  amount = undefined;

  time = undefined;

  constructor(obj) {
    if (!obj) return;
    if (obj.uuid) this.uuid = obj.uuid;
    if (obj.name) this.name = obj.name;
    if (obj.dosage) this.dosage = obj.dosage;
    if (obj.amount) this.amount = obj.amount;
    if (obj.time) this.time = obj.time;
  }
}
