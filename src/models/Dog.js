import Food from '@/models/Food';
import Medicine from '@/models/Medicine';
import Walk from '@/models/Walk';
import Symptom from '@/models/Symptom';
import { v4 as uuidv4 } from 'uuid';

export default class Dog {
  uuid = uuidv4();

  name = undefined;

  age = undefined;

  gender = undefined;

  breed = undefined;

  picture = undefined;

  food = [];

  medicine = [];

  walks = [];

  symptoms = [];

  constructor(obj) {
    if (!obj) return;
    if (obj.uuid) this.uuid = obj.uuid;
    if (obj.name) this.name = obj.name;
    if (obj.age) this.age = obj.age;
    if (obj.gender) this.gender = obj.gender;
    if (obj.breed) this.breed = obj.breed;
    if (obj.picture) this.picture = obj.picture;
    if (obj.food && obj.food.length > 0) this.food = obj.food.map((it) => new Food(it));
    if (obj.medicine && obj.medicine.length > 0) {
      this.medicine = obj.medicine.map((it) => new Medicine(it));
    }
    if (obj.walks && obj.walks.length > 0) {
      this.walks = obj.walks.map((it) => new Walk(it));
    }
    if (obj.symptoms && obj.symptoms.length > 0) {
      this.symptoms = obj.symptoms.map((it) => new Symptom(it));
    }
  }
}
