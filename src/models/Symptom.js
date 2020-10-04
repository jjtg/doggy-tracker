export default class Symptom {
  symptom = undefined;

  time = undefined;

  constructor(obj) {
    if (!obj) return;
    if (obj.symptom) this.symptom = obj.symptom;
    if (obj.time) this.time = obj.time;
  }
}
