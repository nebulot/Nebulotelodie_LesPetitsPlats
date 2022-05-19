import { getRecipes } from "./api.js";

console.log(await getRecipes);
//Keep data and create display 

// open and close the three butons filter
//display cards recipes
 
export class RecipeCard {
  constructor(recipe, indexCard) {
  this.recipe = recipe;
  this.indexCard = indexCard;
  }
  
  createHtml() {
    return ` 
    <article class="card">
    <img class="photographer-medium_gallery" alt="${this.title}" src= "./assets/images/${this.photographerId}/${this.image}"/></a>
    <footer class="cards-media-footer">
    <p class="cards-media_title">${this.title}</p>
    <div class="cards-media_likes">
    <span class="cards-media_total_likes" title="J'aime">${this.likes}</span>
    <bouton class="cards-media_total_likes_btn" role="button" aria-label="ajouter un j'aime">
    <i class="far fa-heart" aria-hidden="true" aria-label="likes"></i>
    </button>
    </div>
    </footer>
    </div> `;
  }
}