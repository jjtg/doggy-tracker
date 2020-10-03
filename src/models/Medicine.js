export default class Medicine {
  medicineName = 'N/A';

  amount = 'N/A';

  time = []

  constructor(obj) {
    if (!obj) return;
    if (obj.medicineName) this.medicineName = obj.medicineName;
    if (obj.amount) this.amount = obj.amount;
    if (obj.time) this.time = obj.time;
  }
}
