export default class Food {
  foodType = 'N/A';

  foodAmount = 0;

  constructor(obj) {
    if (!obj) return;
    this.foodType = obj.foodType;
    this.foodAmount = obj.foodAmount;
  }
}
