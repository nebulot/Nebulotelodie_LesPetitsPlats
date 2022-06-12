//4bis Ingredients class
export class Ingredient {
    /*
     * @constructor
     * @param {Object} data
     * @param {string} data.ingredient
     * @param {undefined|number} data.quantity
     * @param {undefined|string} data.unit
     */
    constructor(data) {
      this.name = data.ingredient.toLowerCase();
      if (data.quantity) this.quantity = data.quantity;
      if (data.unit) this.unit = data.unit;
    }
  }