import { v4 as uuidv4 } from 'uuid';

export default class Symptom {
  uuid = uuidv4();

  symptom = undefined;

  time = undefined;

  picture = undefined;

  constructor(obj) {
    if (!obj) return;
    if (obj.uuid) this.uuid = obj.uuid;
    if (obj.symptom) this.symptom = obj.symptom;
    if (obj.time) this.time = obj.time;
    if (obj.picture) this.picture = obj.picture;
  }
}
