import {displayAlert} from "../index.js";


const recipesSection = document.querySelector(".receipe-container");
//5 focus on searchbar and check all recipes : nodeList(50)
export const searchBarInput = document.querySelector(".search-bar");
searchBarInput.addEventListener("keyup", (e) => {
  const searchRecipes = e.target.value;
  const cards = document.querySelectorAll(".card");
  let count = filteredCards(searchRecipes, cards);
  displayAlert(count);
  console.log(searchRecipes);
});


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

