import {getRecipes} from "./api.js";
import {RecipeCard} from "./constructor/displayCards.js";

//ARRAY METHOD 

let recipes = [];
let searchResult = [];
let queryLength = 0;

// INIT
export async function initRecipes() {
    recipes = await getRecipes();
    console.log(recipes);
}

// SEARCH
export function searchRecipes() {
    const query = this.value;
    if (query.length > 2) {
        let [Array, results] = [[], []];
        // CHECK FOR ERASE STRING / Keep old search OR reload all recipes
        if (queryLength > query.length) {
            Array = [...recipes];
        } else {
            Array = searchResult.length > 0 ? [...searchResult] : [...recipes];
        }

        results = Array.filter(recipe => {
            return recipe.name.toLowerCase().includes(query)
                || recipe.description.toLowerCase().includes(query)
                || recipe.ingredients.filter(ingredient => ingredient.ingredient.toLowerCase().includes(query)).length >= 1;
            });

        searchResult = [...results];
        queryLength = query.length;
        displayRecipes(searchResult);
    } else {
        searchResult = [...recipes];
        queryLength = 0;
        results.innerHTML = '';
    }
    console.log(searchResult);
}

// DISPLAY
export function displayRecipes(data) {
    results.innerHTML = '';
    data.forEach(recipe => {
        let recipeCard = new RecipeCard(recipe).make();
        results.appendChild(recipeCard);
    });
}
