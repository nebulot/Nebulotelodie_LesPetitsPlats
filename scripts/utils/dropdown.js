//text create with [active] and [inactive] problem 
//use second solution dom Element and function onclick(); 
const dropdownValues = (recipes) => {
  const { ingredients, appareil, ustensiles } = initFilters(recipes);
};

//////////DOM ELEMENTS/////////////////////////////
// close and open dropdown 
const btn1 = document.getElementById("btn-ingredients");
const btn2 = document.getElementById("btn-appareils");
const btn3 = document.getElementById("btn-ustensiles");
const iconDown = document.getElementsByClassName("fa-chevron-down");
const iconUp = document.getElementsByClassName("fa-chevron-up");


//main.addEventListener("click", closeAll);
//search.addEventListener("click", closeAll);

btn1.onclick = function() {
  let contentBtn = document.getElementById("links-ingredients");
  
  //shrink the button
  if (contentBtn.style.display !== "none") {
    contentBtn.style.display = "none";
    
}else{
  contentBtn.style.display = "block";
      //expand the button
  
 }
}

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

