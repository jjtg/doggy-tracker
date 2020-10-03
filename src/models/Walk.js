import Poo from '@/models/Poo';

export default class Walk {
  time = undefined;

  length = 0;

  pee = false;

  poo = undefined;

  constructor(obj) {
    if (!obj) return;
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
