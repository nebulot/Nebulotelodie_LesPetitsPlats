// condition to see the different alert success or danger
class Alerts {
  handleAlert() {
    const alertBox = document.querySelector(".alert");
    if (searchBarInput.value.length != 0 && globalRecipesList.length == 0) {
      this.dangerAlert(alertBox);
      console.log(searchBarInput);
    } else if (
      searchBarInput.value.length < 3 &&
      globalRecipesList.length == recipes.length
    ) {
      alertBox.classList.remove("displayed");
    } else {
      this.successAlert(alertBox);
    }
    this.closeAlert(alertBox);
    return alertBox;
  }

  // when the research on the search bar is a success
  // create display
  successAlert(alertBox) {
    alertBox.classList.add("alert-success");
    alertBox.classList.add("displayed");
    alertBox.classList.remove("alert-danger");
    if (globalRecipesList.length > 1) {
      alertBox.innerHTML = `
                  ${globalRecipesList.length} recettes correspondent à votre recherche
                  <i class="close-alert far fa-times-circle"></i>
                  `;
    } else {
      alertBox.innerHTML = `
                  ${globalRecipesList.length} recettes correspondent à votre recherche
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
}
