import Poo from '@/models/Poo';
import { v4 as uuidv4 } from 'uuid';

export default class Walk {
  uuid = uuidv4();

  time = undefined;

  length = undefined;

  pee = false;

  poo = undefined;

  constructor(obj) {
    if (!obj) return;
    if (obj.uuid) this.uuid = obj.uuid;
    if (obj.time) this.time = obj.time;
    if (obj.length) this.length = obj.length;
    if (obj.pee) this.pee = obj.pee;
    if (obj.poo) this.poo = new Poo(obj.poo);
  }

  get didPee() {
    return this.pee;
  }

  get didPoo() {
    return !!this.poo;
  }
}
