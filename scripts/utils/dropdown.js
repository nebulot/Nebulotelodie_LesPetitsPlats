//text create with [active] and [inactive] problem 

const selectedTags = [];
//use second solution dom Element and function onclick(); 
const dropdownValues = (recipes) => {
  const { ingredients, appareil, ustensiles } = initFilters(recipes);
};


//////////DOM ELEMENTS/////////////////////////////
// close and open dropdown 
const btn1 = document.getElementById("btn-ingredients");
const btn2 = document.getElementById("btn-appareils");
const btn3 = document.getElementById("btn-ustensiles");

const appareilInput = document.querySelector(".appareil_input");
const ustensilsInput = document.querySelector(".ustensils_input");

const li = document.getElementsByClassName("result");

const ingredientIcon = document.getElementsByClassName("ingredients_arrow");
const appareilsIcon = document.getElementsByClassName("appliance_arrow");
const ustensilsIcon = document.getElementsByClassName("ustensils_arrow");

//main.addEventListener("click", closeAll);
//search.addEventListener("click", closeAll);

btn1.onclick = function() {
  let contentBtn = document.getElementById("links-ingredients");
  //let ingredientsIcon = document.getElementsByClassName("ingredients_arrow");
  //shrink the button
  if (contentBtn.style.display !== "none") {
    contentBtn.style.display = "none";
    
}else{
  contentBtn.style.display = "block";
      //expand the button
  //ingredientsIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
  const tags = initFilters(recipes);
  console.log(tags);
  tags.ingredients.forEach((ingredient) => {
    const ul = document.querySelector("#links-ingredients .result");
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.className = "ingredient_item";
    ul.appendChild(li);
    //console.log(li);
    //console.log(ul);
})};
listIngredientsItems();
};

const ingredientsInput = document.querySelector(".ingredient_input");
ingredientsInput.addEventListener("click", (e) => {
const tags = initFilters(recipes);
//const ul = document.querySelector("#links-ingredients .result");
  //ul.innerHtml ="";
  const query = e.target.value.toLowerCase();
  console.log(query); //ok scibe pomm....
  const searchresults = tags.ingredients.filter((ingredient) => {
				return ingredient.toLowerCase().includes(query);
			}); 
      searchresults.forEach((result) => {
        const addresults = document.createElement("div");
        results.innerHtml = addresults ;
        });
        console.log(searchresults);
        listIngredientsItems();
			});
     
  const listIngredientsItems = () => {
  const li = document.querySelectorAll(".ingredient_item");
  li.forEach((item) => {
    item.addEventListener("click", () => {
      selectedTags.push(item.textContent);
      const selectedTagsStop = [...new Set(selectedTags)];
      createTagsBar(selectedTagsStop, recipes);
      //console.log(createTagsBar);
    });
  });
};
		
////////////////////////////////BUTTON 2 APPAREIL//////////////////////////////////

btn2.onclick = function() {
  let contentBtn2 = document.getElementById("links-appareils");
 
  //shrink the button
  if (contentBtn2.style.display !== "none") {
    contentBtn2.style.display = "none";
    
}else{
  contentBtn2.style.display = "block";
  //expand the button
  const tags = initFilters(recipes);
  tags.appareil.forEach((appliance) => {
    const ul = document.querySelector("#links-appareils .result");
    const li = document.createElement("li");
    li.textContent = appliance;
    li.className = "appareil_item";
    ul.appendChild(li);
  })};
  listAppareilsItems();
}

const listAppareilsItems = () => {
  const appareilsItems = document.querySelectorAll(".appareil_item");
  appareilsItems.forEach((item) => {
    item.addEventListener("click", () => {
      selectedTags.push(item.textContent);
      const selectedTagStop = [...new Set(selectedTags)];
      createTagsBar(selectedTagStop, recipes);
    });
  });
};

///////////////////////////////////////BOUTON 3 USTENSILES/////////////////////////////////////////

btn3.onclick = function() {
  let contentBtn3 = document.getElementById("links-ustensiles");
  
  //shrink the button
  if (contentBtn3.style.display !== "none") {
    contentBtn3.style.display = "none";
    
}else{
  contentBtn3.style.display = "block";
      //expand the button
      const tags = initFilters(recipes);
  tags.ustensiles.forEach((ustensils) => {
    const ul = document.querySelector("#links-ustensiles .result");
    const li = document.createElement("li");
    li.textContent = ustensils;
    li.className = "ustensils_item";
    ul.appendChild(li);
  })};
  listUstensilesItems();
}

const listUstensilesItems = () => {
  const ustensilesItems = document.querySelectorAll(".ustensils_item");
  console.log(ustensilesItems); //nodeList (30) li.ustensils_items
  ustensilesItems.forEach((item) => {
    item.addEventListener("click", () => {
      selectedTags.push(item.textContent);
      console.log(selectedTags);// number of selection all (3)
      const selectedTagsStop = [...new Set(selectedTags)];
      createTagsBar(selectedTagsStop, recipes);
      
    });
  });
};