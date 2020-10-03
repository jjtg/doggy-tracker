export default class Poo {
  pooType = 'normal'

  amount = 'normal'

  constructor(obj) {
    if (!obj) return;
    if (obj.pooType) this.pooType = obj.pooType;
    if (obj.amount) this.amount = obj.amount;
  }
}
