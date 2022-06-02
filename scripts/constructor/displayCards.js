
// create DOM recipe CARD 

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
  

  get recipeCard() {
    return `
		<article class="receipe_card">
		<a href="#">
		<div class="card_img">
			<div class="card_recipe">
			<h2 class="card_title">${this._name}</h2>
			<div class="card_time">
			<i class="card_oclock"></i>
			<p class="card_min">${this._time}min</p>
			</div>
			</div>
			<div class="card_content">
			<ul class="card_ingredients">
							listCard_HTML
							</ul>
							<p class="card_description">
							${this._description}
							</p>
						  </div>
						  </div>
					  </a>
					</article>`;
  }
}

/*createDom(
					"aside",
					{ class: "recipe__card__aside" },
					createDom(
						"ul",
						{ class: "recipe__card__list" },
						// ... pour transformer les éléments du tableau en paramètres pour createDom
						//     .map() pour renvoyer un tableau car .forEach() renvoie undefined
						...this._ingredients.map((ingredient) => {
							// return pour renvoyer une valeur sinon .map() renvoie un tableau de undefined
							return createDom(
								"li",
								createDom("strong", `${ingredient.ingredient} `),
								ingredient.quantity ? `: ${ingredient.quantity} ` : "",
								ingredient.unit ? `${ingredient.unit} ` : "",
								{
									class: "recipe__card__list__item",
								}
							);
						})
					),
					createDom("p", `${this._description}`, { class: "recipe__card__description" })
      }*/
