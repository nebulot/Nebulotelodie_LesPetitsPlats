// (6) DROPDOWN DOM  (11) DROPDOWN events (click btn, keyup input, create tag)
let selectedTags = [];


const dropdownValues = (recipes) => {
  const { ingredients, appareil, ustensiles } = initFilters(recipes);


//////////DOM ELEMENTS/////////////////////////////

//main.addEventListener("click", closeAll);
//search.addEventListener("click", closeAll);

// close and open dropdown
const btn1 = document.querySelector("#btn-ingredients");
const ul = document.querySelector(".result_ingredients");
const ingredientsInput = document.querySelector("#input-ingredients");
const ingredientsIcon = document.querySelector(".ingredients_arrow");


const btn2 = document.querySelector("#btn-appliance");
const ul2 = document.querySelector(".result_appliance");
const appareilInput = document.querySelector("#input-appliance");
const appareilsIcon = document.querySelector(".appliance_arrow");

const btn3 = document.querySelector("#btn-ustensils");
const ul3 = document.querySelector(".result_ustensils");
const ustensilsInput = document.querySelector("#input-ustensils");
const ustensilsIcon = document.querySelector(".ustensils_arrow");

//const li = document.querySelector(".ingredient_item")

////////////////// btn1 INGREDIENT BTN / INPUT / LIST /////////////////////////
btn1.addEventListener("click", () => {
  //shrink the button
  if (ul.classList.contains("result_undisplayed")) {
    ul.classList.replace("result_undisplayed", "result_displayed");
    ingredientsIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    ul2.classList.replace("result_displayed", "result_undisplayed");
    ul2.innerHTML = "";
    appareilsIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    ul3.classList.replace("result_displayed", "result_undisplayed");
    ul3.innerHTML = "";
    ustensilsIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    
    //expand the button
    //console.log(tags);
    ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      li.className = "ingredient_item";
      ul.appendChild(li);
      //contentBtn.appendChild(ul);
      //console.log(li); //<div btn>name<div>
      //console.log(contentBtn);
    });
  } else {
    ul.classList.replace("result_displayed", "result_undisplayed");
    ul.innerHTML="";
    ingredientsIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
  listIngredientsItems();
});

ingredientsInput.addEventListener("keyup", (e) => {
  ul.innerHTML ="";
  //console.log(contentBtn);
  if (e.target.value.length > 3) {
  const tags = initFilters(recipes);
  const query = e.target.value.toLowerCase();
  //const ul = document.querySelector("#links-ingredients .result");
  //console.log(query); //ok scibe pomm....
  const results = tags.ingredients.filter((ingredient) => {
    return ingredient.toLowerCase().includes(query);
  });
  //console.log(results); //nbr [2] and name "pomme"..
  results.forEach((result) => {
    const li = document.createElement("li");
      li.textContent = result;
      li.className = "ingredient_item";
      ul.appendChild(li);
  });  
  listIngredientsItems();
}});

const listIngredientsItems = () => {
  let li = [];
  li = document.querySelectorAll(".ingredient_item");
 li.forEach((item) => {
    item.addEventListener("click", () => {
      selectedTags.push(item.textContent);
      const selectedTagsStop = [...new Set(selectedTags)];
      createTagsBar(selectedTagsStop, "ingredient", recipes);
      //console.log(selectedTags); //ok ['pomme']
      });
      //console.log(li); ok li.ingredient_item
      //console.log(item); ok balise <li class>name</li>
  });
};

////////////////// btn2 APPAREIL BTN / INPUT / LIST /////////////////////////

btn2.addEventListener("click", () => {
   //shrink the button
   if (ul2.classList.contains("result_undisplayed")) {
    ul2.classList.replace("result_undisplayed", "result_displayed");
    appareilsIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    ul.classList.replace("result_displayed", "result_undisplayed");
    ul.innerHTML = "";
    ingredientsIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    ul3.classList.replace("result_displayed", "result_undisplayed");
    ul3.innerHTML = "";
    ustensilsIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    //expand the button
    //console.log(tags);
    appareil.forEach((appliance) => {
      const li = document.createElement("li");
      li.textContent = appliance;
      li.className = "appliance_item";
      ul2.appendChild(li);
      console.log(li); //<div btn>name<div>
      //console.log(contentBtn);
    });   
  } else {   
    ul2.innerHTML = "";
    ul2.classList.replace("result_displayed", "result_undisplayed");
    appareilsIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
  }  
  listApplianceItems();
});

appareilInput.addEventListener("keyup", (e) => {
  ul2.innerHTML="";
  //console.log(contentBtn);
  if (e.target.value.length > 3) {
  const tags = initFilters(recipes); 
  const query = e.target.value.toLowerCase();
  //console.log(query); //ok scibe pomm....
  const results = tags.appareil.filter((item) => {
    return item.toLowerCase().includes(query);
  });
  //console.log(results); //nbr [2] and name "pomme"..
  results.forEach((result) => {
    const li = document.createElement("li");
      li.textContent = result;
      li.className = "appliance_item";
      ul2.appendChild(li);
  });  
  listApplianceItems();
}});
      
const listApplianceItems = () => {
  let li = [];
  li = document.querySelectorAll(".appliance_item");
 li.forEach((item) => {
    item.addEventListener("click", () => {
      selectedTags.push(item.textContent);
      const selectedTagsStop = [...new Set(selectedTags)];
      createTagsBar(selectedTagsStop, "appliance", recipes);
      console.log(selectedTags); //ok ['pomme']
      });
      //console.log(li); ok li.ingredient_item
      //console.log(item); ok balise <li class>name</li>
  });
};


////////////////// btn3 USTENSILS BTN / INPUT / LIST /////////////////////////

btn3.addEventListener("click", () => {
  //shrink the button
  if (ul3.classList.contains("result_undisplayed")) {
    ul3.classList.replace("result_undisplayed", "result_displayed");
    ustensilsIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    ul2.classList.replace("result_displayed", "result_undisplayed");
    ul2.innerHTML = "";
    appareilsIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    ul.classList.replace("result_displayed", "result_undisplayed");
    ingredientsIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
   //expand the button
   //console.log(tags);

   ustensiles.forEach((ustensils) => {
     const li = document.createElement("li");
     li.textContent = ustensils;
     li.className = "ustensils_item";
     ul3.appendChild(li);
     
     console.log(li); //<div btn>name<div>
  });    
  } else {
 
   ul3.innerHTML = "";
    ul3.classList.replace("result_displayed", "result_undisplayed");
    ustensilsIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
 }  
 listUstensilsItems();
});

ustensilsInput.addEventListener("keyup", (e) => {
  ul3.innerHTML = "";
  //console.log(contentBtn);
  if (e.target.value.length > 3) {
  const tags = initFilters(recipes);
  const query = e.target.value.toLowerCase();
  //console.log(query); //ok scibe pomm....
  const results = tags.ustensiles.filter((ustensil) => {
    return ustensil.toLowerCase().includes(query);
  });
  //console.log(results); //nbr [2] and name "pomme"..
  results.forEach((result) => {
    const li = document.createElement("li");
      li.textContent = result;
      li.className = "ustensils_item";
      ul3.appendChild(li);
  });  
  //console.log(results); ok idem [nbr + name results research]
  listUstensilsItems();
}});
      
const listUstensilsItems = () => {
  let li = [];
  li = document.querySelectorAll(".ustensils_item");
 li.forEach((item) => {
    item.addEventListener("click", () => {
      selectedTags.push(item.textContent);
      const selectedTagsStop = [...new Set(selectedTags)];
      createTagsBar(selectedTagsStop, "ustensil", recipes);
      console.log(selectedTags); //ok ['pomme']
      });
      //console.log(li); //ok li.ingredient_item
      //console.log(item); //ok balise <li class>name</li>
  });
};
}