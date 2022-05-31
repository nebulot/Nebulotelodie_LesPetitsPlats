import { getRecipes } from "./api.js";

console.log(await getRecipes);
//Keep data and create display 

// open and close the three butons filter
//display cards recipes
 
export class RecipeCard {
  constructor(recipe) {
  this.recipe = recipe;
  
  }
  
  createHtml() {
    return ` 
    <article class="card">
    <a href="#">
    <div class="card_img">
        <div class="card_recipe">
        <h2 class="card_title">title</h2>
        <div class="card_time">
        <i class="card_oclock"></i>
        <p class="card_min">minute min</p>
        </div>
        </div>
        <div class="card_content">
        <ul class="card_ingredients">
                        listCard_HTML
                        </ul>
                        <p class="card_description">
                        description
                        </p>
                      </div>
                      </div>
                  </a>
                </article>`
  }
}