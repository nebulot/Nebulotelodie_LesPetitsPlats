class DropdownsBuilder {
  constructor(type) {
    this.type = type;
    this.color = this.Color();
    
  }

  Color() {
    switch (this.type) {
      case "ingredients":
        return "primary";
      case "appareils":
        return "success";
      case "ustensiles":
        return "danger";
      default:
        console.log("ERROR");
    }
  }

  make() {
   

    const btns = document.createElement("div");
    btns.className = "btn-dropdown-container btn w-auto row rounded align-items-center ";
    btns.innerHTML = `
    <button onclick= "displayDropdown()" class="btn btn-${this.color} text-white form-control py-4 btn-${this.type} rounded-left border-0"> 
      ${this.type} <i class="fas fa-chevron-down"></i></button>


    <div id = "btn-dropdown-toggle"  class = "${this.type}_container bg-${this.color} mystyle">
    <input type="text" id = "input-${this.type}" 
    class="input-dropdown form-control py-3 rounded-left border-0  bg-${this.color}" placeholder = "Rechercher un ${this.type.substr(0,this.type.length - 1)}" min-length="3""/>
    <ul class="dropdown-list-tag rounded-bottom border-0 text-white bg-${this.color} result">list item</ul>
    </div>
           `;
    return btns;
  }
}
