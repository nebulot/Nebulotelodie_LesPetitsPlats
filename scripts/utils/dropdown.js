//text create with [active] and [inactive] problem 

const selectedFilters = [];
//use second solution dom Element and function onclick(); 
const dropdownValues = (recipes) => {
  const { ingredients, appareil, ustensiles } = initFilters(recipes);
};

//////////DOM ELEMENTS/////////////////////////////
// close and open dropdown 
const btn1 = document.getElementById("btn-ingredients");
const btn2 = document.getElementById("btn-appareils");
const btn3 = document.getElementById("btn-ustensiles");
const ingredientsInput = document.querySelector(".ingredient_input");
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
  const filters = initFilters(recipes);
  filters.ingredients.forEach((ingredient) => {
    const ul = document.querySelector("#links-ingredients .result");
    const li =document.createElement("li");
    li.textContent = ingredient;
    li.className = "ingredient_item";
    ul.appendChild(li);
})};
listIngredientsItems();
};

ingredientsInput.addEventListener("keyup", (e) => {
  li.innerHtml ="";
  const query = e.target.value.toLowerCase();
			const results = ingredients.filter((ingredient) => {
				return ingredient.toLowerCase().includes(query);
			});
			results.forEach((result) => {
				return li.append(createTextContent("li", `${result}`, {class:"ingredients_item"}));
			});
      //listIngredientsItems();
});

const listIngredientsItems = () => {
  const ingredientsItems = document.querySelectorAll(".ingredients_item");
  ingredientsItems.forEach((item) => {
    item.addEventListener("click", () => {
      selectedFilters.push(item.textContent);
      const selectedFiltersStop = [...new Set(selectedFilters)];
      createFiltersBar(selectedFiltersStop, recipes);
    });
  });
};
		









  

btn2.onclick = function() {
  let contentBtn2 = document.getElementById("links-appareils");
 
  //shrink the button
  if (contentBtn2.style.display !== "none") {
    contentBtn2.style.display = "none";
    
}else{
  contentBtn2.style.display = "block";

  //expand the button
 }
}

btn3.onclick = function() {
  let contentBtn3 = document.getElementById("links-ustensiles");
  
  //shrink the button
  if (contentBtn3.style.display !== "none") {
    contentBtn3.style.display = "none";
    
}else{
  contentBtn3.style.display = "block";
  
    //expand the button
 }
}



