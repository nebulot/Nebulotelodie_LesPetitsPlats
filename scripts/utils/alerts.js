

// condition to see the different alert success or danger 

export class Alerts {
  handleAlert() {    
    const userInput = document.querySelector(".search-bar");
    const alertBox = document.querySelector(".alert")
   if (userInput.value.length != 0 && recipes.length == 0) {
      this.dangerAlert(alertBox);
    } else if (
      userInput.value.length < 3 &&
      recipes.length == filteredCards.length
    ) {
      alertBox.classList.remove("displayed");
    } else {
      this.successAlert(alertBox);
    }
    this.closeAlert(alertBox);
    console.log(userInput);    
  }
// when the research on the search bar is a success
// create display 
successAlert(alertBox) {
  alertBox.classList.add("alert-success");
  alertBox.classList.add("displayed");
  alertBox.classList.remove("alert-danger");
  if (recipes.length > 1) {
    alertBox.innerHTML = `
                  ${recipes.length} recettes correspondent à votre recherche
                  <i class="close-alert far fa-times-circle"></i>
                  `;
  } else {
    alertBox.innerHTML = `
                  ${recipes.length} recettes correspondent à votre recherche
                  <i class="close-alert far fa-times-circle"></i>
                  `;
  }
}
// no success research on searchBar alert remove 
// create display dangerAlert
dangerAlert(alertBox) {
  alertBox.classList.add("alert-danger");
  alertBox.classList.add("displayed");
  alertBox.classList.remove("alert-success");
  alertBox.innerHTML = `
                Aucune recette ne correspond à votre critère... 
                Vous pouvez chercher "tarte aux pommes", "poisson", etc.
                <i class="close-alert far fa-times-circle"></i>
                `;
}

// final close the alertBox
closeAlert(alertBox) {
  if (alertBox.classList.contains("displayed")) {
    const closeAlertBox = document.querySelector(".close-alert");
    closeAlertBox.addEventListener("click", () => {
      alertBox.classList.remove("displayed");
   });
  }
}




/*function createAlerts() {
  const alertBox = document.createElement("div");
  alertBox.className = "alert";
  alertBox.getAttribute = "alert";
  document.querySelector(".alert").insertAdjacentHTML(
    "afterbegin",
  alertBox.innerHTML = `
  <i class= "far fa-times-circle"></i>
  <p>Aucun résultat ne correspond à votre critère de recherche</p>
  <p> </p>
  `
  )
  alerts.appendChild(alertBox);
};*/
   
}
