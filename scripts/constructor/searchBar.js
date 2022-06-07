import { displayCards } from "../index.js";
import { RecipeCard } from "./displayCards.js";

//5bis 
export let sortRecipes = (recipes, filter) => {
    //   console.log(recipes, filter);
    let searchByCards = [];
  
    recipes.forEach((recipe) => {
      // console.log(recipe);
  
      if (
        // une recette ?
        data.name.toLowerCase().trim().includes(filter.toLowerCase().trim()) ||
        data.description
          .toLowerCase()
          .trim()
          .includes(filter.toLowerCase().trim()) ||
        // un appareil ?
        recipe.appliance
          .toLowerCase()
          .trim()
          .includes(filter.toLowerCase().trim())
      ) {
        searchByCards.push(recipe);
        //   console.log(cards);
      }
  
      /* un ustensil ?
      recipe.ustensils.filter((elt) => {
        //   console.log(elt, filter);
        if (elt.toLowerCase().includes(filter.toLowerCase())) {
          // console.log(recipe);
          googledCards.push(recipe);
        }
      });*/
  
      // un ingredient ?
      recipe.ingredients.map((ingredient) => {
        if (
          ingredient.ingredient
            .toLowerCase()
            .trim()
            .includes(filter.toLowerCase().trim())
        ) {
          // console.log(recipe);
  
          searchByCards.push(recipe);
        }
      });
    });
    // console.log(googledCards);
    return searchByCards;
  };

  export const deleteSearchBar = (array) => {
    let clean = [];
    array.forEach((item) => {
      // console.log(item.id);
      clean.indexOf(item) == -1 ? clean.push(item) : "";
    });
    // console.log(cleanDuplicate);
    return clean;
  };





//5 focus on searchbar 

export let searchBar = (recipes) => {
    const searchInput = document.querySelector(".search-bar");
  
    searchInput.addEventListener("input", () => {
      // if number of letter > 2 :  start algo
      if (searchInput.value.length > 2) {
        //   console.log(takeIt.value);
        const searchRecipes = sortRecipes(recipes, takeIt.value);
        const searchRecipesCard = deleteSearchBar(searchRecipes);
        //console.log(searchRecipesCard);
        recipeContainer.displayCards(searchRecipesCard);
        //filters.DISPLAY_FILTERS(searchRecipesCard);
        isFilterReload(recipes);
      } else {
        // SINON TABLEAU DES RECETTES
        recipeContainer.displayCards(recipes);
        isFilterReload(recipes);
        // ON VIDE LE TABLEAY DEStags
        // console.log(tagsArray);
        while (tagsArray.length > 0) {
          tagsArray.pop();
        }
        // console.log(tagsArray);
        showListOfTags(tagsArray);
  
        document.querySelectorAll(".list_wrapper").forEach((li) => {
          li.classList.add(".list_wrapper_option");
          li.classList.remove("list_wrapper_option--enable");
        });
      }
    });
  };

 
  

