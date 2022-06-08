//5 focus on searchbar

export const searchBarInput = document.querySelector(".search-bar");
searchBarInput.addEventListener("keyup", (e) => {
  console.log(e);
  const searchRecipes = e.relatedTarget.value;
  const cards = document.querySelectorAll(".card");
  filteredElements(searchRecipes, cards);
});

//filtered by name and numbers of letters
function filteredElements(letters, elements) {
  if (letters.length > 2) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].textContent.toLowerCase().includes(letters)) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
  }
}
