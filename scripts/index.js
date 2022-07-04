///////////////////////5 DOM for "searchbar" and 8 "tags"/////////////////////////////
const dropdownsBar = document.querySelector(".btns-dropdown");
const tags = document.querySelector(".tags");

//3 container card recipes
//display cards recipes
/*const recipesSection = document.querySelector(".receipe-container");
const displayCards = (recipes) => {
  recipes.forEach((recipe) => {
    //console.log(recipe); ok
    recipesSection.append(new RecipeCard(recipe).createRecipeCard);
    console.log(RecipeCard);
  console.log(createRecipeCard); ok

  });
};*/

//////////// 9 create an alert display under searchbar to success or danger research //////
/*export 
  };*/


////////////////////////////////INIT////////////////////////////////
//error stop async 
function init() {
  
  /*const { recipes } = await getRecipes();
  displayCards();
  //console.log(recipes);   //=> search arrayalgo.js*/
  
  // return bts'dropdown
  const dropdownsValues = ['ingredients', 'appareils', 'ustensiles'];
    for (let type of dropdownsValues) {
        const dropdownsBtn = new DropdownsBuilder(type);
        dropdownsBtn.make().forEach(btn => dropdownsBar.append(btn));
        //console.log(dropdownsBtn); (type : "", color :"");
        //console.log(dropdownsBar); <div "btns-dropdown">
    }
    // console.log(dropdownsValues); results (3)[ingredients,appliances,ustensils]

// 8 alert tag searchbar 
const tag = new Tag('ingredients', 'lait de coco').make();
    tags.appendChild(tag);
    const tag2 = new Tag('appareils', 'four').make();
    tags.appendChild(tag2);
    const tag3 = new Tag ('ustensiles', 'fouet').make();
    tags.appendChild(tag3); 
};
init();

///////////////////////    (5) SEARCHBAR  arrayAlgo.js  ////////////////////////////////
const search = document.querySelector("form .input-group ");
const results = document.querySelector("main .receipe-container");

const searchBarInput = search.querySelector("#search-bar");
const submit = search.querySelector("span");

//8 alert display 
const displayAlert = (count) => {
  const alerts = document.querySelector(".alerts");
  alerts.append(new Alerts(count).handleAlert());
}
//5 focus on searchbar and check all recipes : nodeList(50) Alert
searchBarInput.addEventListener("keyup", (e) => {
  //const searchRecipes = e.target.value;
  const cards = document.querySelectorAll(".card");
  let count = filteredCards(searchRecipes, cards);
  displayAlert(count);
  console.log(searchRecipes);
});



//////////////////////     (7)   DROPDOWN ////////////////////////////
const appareils = dropdownsBar.querySelectorAll(".ingredients");
const ustensils = dropdownsBar.querySelectorAll(".ustensiles");
const appliances = dropdownsBar.querySelectorAll(".appareils");

const open = dropdownsBar.querySelectorAll("#active");
const hidden = dropdownsBar.querySelectorAll("#inactive");



window.addEventListener('load', initRecipes);   //ask computer to querylength ?
searchBarInput.addEventListener('input', searchRecipes);   //searchBar.js function
search.addEventListener('submit', (e) => e.preventDefault()); 

////////////////////////// TAGS BTN ////////////////////////////////////
//global 
  function closeTags(e) {
    const tagsBtn = [...tags.querySelectorAll("button")];
    const [container] = tagsBtn.filter(btn => btn.contains(e.target));
    container.remove();
    //console.log(tagsBtn); ok
  } 

/////////////////////////////// event DROPDOWN global ////////////////////////////////
  
hidden.forEach(btn => btn.addEventListener('click', displayDropdown));
open.forEach(btn => btn.querySelector('button').addEventListener('click', displayDropdown));
console.log(hidden); //nodeList inactive (3) ok
console.log(open); //nodeList active (3) ok

function displayDropdown(e) {  
 // all btns is inactive we don't see the {typeList}
 // use el for element with (display, filter, contains....)

  [...open].forEach(el => el.style.display = "none");
  [...hidden].forEach(el => el.style.display = "flex");

  // when you click on the  btns, one btn is active and you see {typeList}
  const [container] = [...open].filter(el => el.contains(e.target)).length > 0
      ? [...open].filter(el => el.contains(e.target))
      : [...hidden].filter(el => el.contains(e.target));
  console.log(container);

  const isOpen = container.id;
  //console.log(container); //div btn-{type}-container ok
  //console.log(isOpen); //inactive div ok
  const type = container.classList[container.classList.length - 1];
  const [siblingContainer] = [...dropdownsBar.querySelectorAll(`.${type}`)].filter(el => el.id != isOpen);
  //console.log(isOpen); inactive to
  container.style.display = "flex" ? "none" : "flex";
  siblingContainer.style.display = container.style.display == "flex" ? "none" : "flex";
  console.log(siblingContainer);
  //siblingContainer ; div wrapper-{type} input-dropdown + chevron 
}
  

/////////////   RECIPE  RESULT CARD //////////////////////
// let searchResult => searchBar.js

function displayResults() {
  for (let recipe of searchResult) {
      results.appendChild(recipe);
  }
}
