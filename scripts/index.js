import { getRecipes } from "./api.js";
import { RecipeCard } from "./constructor/displayCards.js";
import { Alerts } from "./utils/alerts.js";
import { DropdownsBuilder } from "./utils/builderDropdown.js";


//console.log(recipes);

//DOM for "searchbar" and "tags"
const dropdownsBar = document.querySelector(".btns-dropdown");
const tags = document.querySelector(".tags");

//3 container card recipes
//display cards recipes
const recipesSection = document.querySelector(".receipe-container");
const displayCards = (recipes) => {
  recipes.forEach((recipe) => {
    //console.log(recipe); ok
    recipesSection.append(new RecipeCard(recipe).createRecipeCard);
    console.log(RecipeCard);
    //console.log(createRecipeCard); ok

  });
};

const init = async () => {
  
  const { recipes } = await getRecipes();
  displayCards(recipes);
  console.log(recipes);

  // 
  const dropdownsValues = ['ingredients', 'appareils', 'ustensiles'];
    for (let type of dropdownsValues) {
        const dropdownsBtn = new DropdownsBuilder(type);
        dropdownsBtn.make().forEach(btn => dropdownsBar.append(btn));
    }
  // envoi tout au dropdown builder
  //let dropdownBuild = new dropdownBuilder();
  //let dropdownFilter = new dropdownFilters(recipes, []);
  
  
};
init();

// 8 create an alert display under searchbar to success or danger research 
export const displayAlert = (count) => {
  const alerts = document.querySelector(".alerts");
  alerts.append(new Alerts(count).handleAlert());
  }

  //DOM after initialized recipes card on the main 
  const ingredients = dropdownsBar.querySelectorAll(".ingredients");
  const appliances = dropdownsBar.querySelectorAll (".appliances");
  const ustensils= dropdownsBar.querySelector(".ustensils");
  const opened = dropdownsBar.querySelectorAll("#opened");
  const hidden = dropdownsBar.querySelectorAll("#hidden");
  const resultsReceipe = document.querySelector(".receipe-container");

  // TAGS BTN
  
function closeTags(e) {
  const tagsBtn = [...tags.querySelectorAll("button")];
  const [ container ] = tagsBtn.filter(btn => btn.contains(e.target));
  container.remove();
}

// btn dropdown 
hidden.forEach(btn => btn.addEventListener('click', displayDropdown));
opened.forEach(btn => btn.querySelector('button').addEventListener('click', displayDropdown));

function displayDropdown(e) {
  // ALL BTNS INACTIVE
  [...opened].forEach(elt => elt.style.display = 'none');
  [...hidden].forEach(elt => elt.style.display = 'flex');
  // ONE BTN ACTIVE
  const [buttons] = [...opened].filter(elt => elt.contains(e.target)).length > 0
      ? [...opened].filter(elt => elt.contains(e.target))
      : [...hidden].filter(elt => elt.contains(e.target));
  const isOpened = container.id;
  const type = container.classList[buttons.classList.length - 1];
  const [siblingContainer] = [...dropdownsBar.querySelectorAll(`.${type}`)].filter(elt => elt.id != isOpened);

  buttons.style.display = 'flex' ? 'none' : 'flex';
  siblingContainer.style.display = buttons.style.display == 'flex' ? 'none' : 'flex';
}



