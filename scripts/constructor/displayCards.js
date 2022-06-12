// 4 create DOM recipe CARD

export class RecipeCard {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._description = data.description;
    this._time = data.time;
    this._servings = data.servings;
    this._ustensils = data.ustensils;
    this._ingredients = data.ingredients;
    this._appliance = data.appliance;
  }

  //5 put the ingredients and quantity on the recipeCard (recipeContainer)
  //create li to put ingredients[array].ingredients.ingredients

  get ingredientsList() {
    
    let ingredientsList = "";

    this._ingredients.forEach((ingredient) => {
      ingredientsList += `
      <li class = "recipe-ingredients">${ingredient.ingredient} : ${
        ingredient.quantity ?? ""
      } ${ingredient.unit ?? ""} </li>`;
    });
    return ingredientsList;
  }

  get createRecipeCard() {
    const recipeContainer = document.createElement("div");
    document.querySelector(".receipe-container").insertAdjacentHTML(
      "afterbegin",
      (recipeContainer.innerHTML = `
      <div class="card rounded border-0">
	    <div class="card-header bg-secondary"></div>
	    <div class="card-body bg-light">
	    <div class="title-time">
		 <h5 class="card-title m-0 font-weight-light">
		   ${this._name}
		 </h5>
		 <div class="recipe_time">
		 <i class="far fa-clock"></i>
		 <h5 class="time">${this._time}min</h5>
	   </div>
	 </div>
	 <div class="ingredients-directions row">
	   <ul class="ingredient-list list-group list-unstyled bg-light">
     ${this.ingredientsList}
	   </ul>
	   <p class="card-text">
	   ${this._description}
	   </p>
	 </div>
   </div>
   </div>`)
    );
    //console.log(recipeContainer);
  }
}
