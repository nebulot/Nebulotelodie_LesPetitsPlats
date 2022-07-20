//text create with [active] and [inactive] problem

let selectedTags = [];


const dropdownValues = (recipes) => {
  const { ingredients, appareil, ustensiles } = initFilters(recipes);


//////////DOM ELEMENTS/////////////////////////////

//main.addEventListener("click", closeAll);
//search.addEventListener("click", closeAll);

// close and open dropdown
const btn1 = document.getElementById("btn-ingredients");
const contentBtn = document.getElementById("links-ingredients");
const ul = document.querySelector(".result-ingredients");
const ingredientsInput = document.querySelector("#input-ingredients");
const ingredientsIcon = document.querySelector(".ingredients_arrow");


const btn2 = document.getElementById("btn-appliance");
const contentBtn2 = document.getElementById("links-appliance");
const ul2 = document.querySelector(".result-appliance");
const appareilInput = document.querySelector("#input-appliance");
const appareilsIcon = document.querySelector(".appliance_arrow");

const btn3 = document.getElementById("btn-ustensils");
const contentBtn3 = document.getElementById("links-ustensils");
const ul3 = document.querySelector(".result-ustensils");
const ustensilsInput = document.querySelector("#input-ustensils");
const ustensilsIcon = document.querySelector(".ustensils_arrow");

//const li = document.querySelector(".ingredient_item")


btn1.addEventListener("click", () => {
  //shrink the button
  if (contentBtn.style.display !== "none") {
    contentBtn.style.display = "none";
    ingredientsIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
  } else {
    contentBtn.style.display = "block";
    ingredientsIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    contentBtn2.style.display = "none";
    ul2.style.display = "none";
    contentBtn3.style.display = "none";
    ul3.style.display = "none";
    
    //expand the button
    const tags = initFilters(recipes);
  
    //console.log(tags);
    tags.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      li.className = "ingredient_item";
      ul.appendChild(li);
      contentBtn.appendChild(ul);
      //console.log(li); //<div btn>name<div>
      //console.log(contentBtn);
    });
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
      createTagsBar(selectedTagsStop, "bg-primary", recipes);
      console.log(selectedTags); //ok ['pomme']
      });
      //console.log(li); ok li.ingredient_item
      //console.log(item); ok balise <li class>name</li>
  });
};

////////////////////////////////BUTTON 2 APPAREIL//////////////////////////////////

btn2.addEventListener("click", () => {
   //shrink the button
   if (contentBtn2.style.display !== "none") {
    contentBtn2.style.display = "none";
    appareilsIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
  } else {
    contentBtn2.style.display = "block";
    appareilsIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    contentBtn.style.display = "none";
    ul.style.display = "none";
    contentBtn3.style.display = "none";
    ul3.style.display = "none";
    
    //expand the button
    const tags = initFilters(recipes);
  
    //console.log(tags);
    tags.appareil.forEach((appliance) => {
      const li = document.createElement("li");
      li.textContent = appliance;
      li.className = "appliance_item";
      ul2.appendChild(li);
      contentBtn2.appendChild(ul2);
      console.log(li); //<div btn>name<div>
      //console.log(contentBtn);
    });
  }  
  listApplianceItems();
});
      

const listApplianceItems = () => {
  const appareilsItems = document.querySelectorAll(".appliance_item");
  appareilsItems.forEach((item) => {
    item.addEventListener("click", () => {
      selectedTags.push(item.textContent);
      const selectedTagStop = [...new Set(selectedTags)];
      createTagsBar(selectedTagStop, "bg-success", recipes);
    });
  });
};

///////////////////////////////////////BOUTON 3 USTENSILES/////////////////////////////////////////

btn3.addEventListener("click", () => {
  //shrink the button
  if (contentBtn3.style.display !== "none") {
   contentBtn3.style.display = "none";
   ustensilsIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
 } else {
   contentBtn3.style.display = "block";
   ustensilsIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
   contentBtn.style.display = "none";
   ul.style.display = "none";
   contentBtn2.style.display = "none";
   ul2.style.display = "none";
   
   //expand the button
   const tags = initFilters(recipes);
 
   //console.log(tags);
   tags.ustensiles.forEach((ustensils) => {
     const li = document.createElement("li");
     li.textContent = ustensils;
     li.className = "ustensils_item";
     ul3.appendChild(li);
     contentBtn3.appendChild(ul3);
     console.log(li); //<div btn>name<div>
     //console.log(contentBtn);
   });
 }  
 listUstensilsItems();
});
     

const listUstensilsItems = () => {
 const ustensilsItems = document.querySelectorAll(".ustensils_item");
 ustensilsItems.forEach((item) => {
   item.addEventListener("click", () => {
     selectedTags.push(item.textContent);
     const selectedTagStop = [...new Set(selectedTags)];
     createTagsBar(selectedTagStop, "bg-danger", recipes);
   });
 });
};

}
