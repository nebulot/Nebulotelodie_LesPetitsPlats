const recipesSection = document.querySelector(".receipe-container");

/*5 bis Get ingredients / appliance / ustensils (without the duplicate)
const allIngredients = [];
for (let i=0; i<recipesSection.length; i++){
  let ingredients = recipes[i].ingredients;
  allIngredients.push(ingredients);
}const ingredientsNoDuplicate = new Set(allIngredients);
const ingredientsFilterArray = Array.from(ingredientsNoDuplicate);

const allAppliances = [];
for (let i=0; i<recipesSection.length; i++){
  let appliances = recipes[i].appliance;
  allAppliances.push(appliances);
}

const appliancesNoDuplicate = new Set(allAppliances);
const appliancesFilterArray = Array.from(appliancesNoDuplicate);
console.log(allAppliances);

const allUstensils = [];
for (let i=0; i<recipesSection.length; i++){
  let ustensils = recipe[i].ustensils;
  allUstensils.push(ustensils);
}
// but lowercase and uppercase (coco / Coco research x2 = > no duplicate, use toLowerCase); 
const allUstensilsJoin = allUstensils.flat();
const lowercaseUstensils = allUstensilsJoin.map(x => x.toLowerCase());
const ustensilsNoDuplicate = new Set(lowercaseUstensils);
const ustensilsFilterArray = Array.from(ustensilsNoDuplicate);

/* display filters for all 
const appliance = new FiltersList(applianceFilterBtn, applianceFilterList, applianceFilterArray);
appliance.display();
const ustensils = new FiltersList(ustensilsFilterBtn, ustensilsFilterList, ustensilsFilterArray);
ustensils.display();
const ingredients = new FiltersList(ingredientsFilterBtn, ingredientsFilterList, IngredientsFilterArray);
ingredients.display();*/



//filtered by name and numbers of letters >2 write 3 letters
//if letters = display blog vs number = display none
export function filteredCards(letters, elements) {
  let count = 0;
  if (letters.length > 2) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].textContent.toLowerCase().includes(letters)) {
        count++;
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
  }
  return count;
};

