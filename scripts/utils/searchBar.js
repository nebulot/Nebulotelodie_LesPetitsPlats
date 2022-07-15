
//ARRAY METHOD 
let recipes = [];
let searchResult = [];
let queryLength = 0;

// GET JSON DATA API
function getRecipes () {
  const recipes = fetch("./scripts/data/recipes.json")
        .then(data => data.json())
        .catch(err => console.log('Error', err));
    return recipes;
}

// INIT //async here not in index.js
async function initRecipes() {
  recipes = await getRecipes();
  //console.log(recipes); Array(50);
}

const searchRecipes = (recipes, search) => {
  search.addEventListener("keyup", (e) => {
      if (e.target.value.length >= 3) {
        const results = [];
        results.innerHTML = "";
        const query = e.target.value.toLowerCase();
        for (let i = 0; i < recipes.length; i++) {
          const { name, ingredients, description } = recipes[i];
          const includesName = name.toLowerCase().includes(query);
          const includesDescription = description.toLowerCase().includes(query);
          let includesIngredients = false;
          for (let y = 0; y < ingredients.length; y++) {
            if (ingredients[y].ingredient.toLowerCase().includes(query)) {
              includesIngredients = true;
            }
          }
          if (includesName || includesDescription || includesIngredients) {
            results.push(recipes[i]);
          }
        }
  
        if (results.length) {
          results.innerHTML = "";
          (results);
        }
  
        if (!results.length) {
          recipesSection.innerHTML = "";
          recipesSection.append(
            createDom(
              "div",
              `Aucune recette ne correspond à votre critère… vous pouvez
              chercher « tarte aux pommes », « poisson », etc.`,
              { class: "no__results" }
            )
          );
        }
      }
      if (e.target.value.length <= 3) {
        recipesSection.innerHTML = "";
        createRecipesCard(recipes);
      }
    });
  };
}

