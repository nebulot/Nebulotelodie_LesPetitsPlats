class DropdownsBuilder {
  constructor(type) {
    this.type = type;
    this.color = this.Color();
    //this.ingredients=ingredients;
    //this.appliances=appareils;
    //this.ustensiles=ustensiles;
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
    btns.className = "btn-dropdown-container col-1 px-0";
    btns.innerHTML = `
    <button onclick= "displayDropdown()" class="btn btn_${this.type} bg-${this.color} text-white "> 
      ${this.type}</button>
    <div id = "btn-dropdown-toggle"  class = "${this.type}_container bg-${this.color} mystyle">
    <input type="text" class="input input_${this.type}" placeholder = "Rechercher un ${this.type.substr(0,this.type.length - 1)}"min-length="3">
    <ul class="dropdown-list-tag"></ul>
    </div>
           `;
    return btns;
  }
}

/*${this.type}.sort().map((el) => <span class="list list_${this.type}}</span>).join("")*/

/*container display open or hidden => index.js global
  inactiveDrop() {
    const container = document.createElement("div");
    container.classList = `${this.type} col-1 px-0 input-group inactive `;
    
    const btnOne = document.createElement("button");
    btnOne.classList = `form-control form-control-lg py-4 btn-${this.type} ${this.type}  btn-${this.color} rounded-left border-0`;
      // UPPERCASE   and   
   //substr() method return the part of a character string between the starting index and a certain number of characters after it.
    btnOne.innerText = this.type[0].toUpperCase() + this.type.substr(1);


    const btnOpen = document.createElement("button");
    btnOpen.classList = `input-group-text px-3 rounded-right border-0 text-white bg-${this.color}`;
    btnOpen.innerHTML = '<i class="fas fa-chevron-down"></i>';

    container.appendChild(btnOne);
    container.appendChild(btnOpen);
    console.log(btnOne);
    return container;
    
  }
 

  activeDrop() {
    const container = document.createElement("div");
    const wrapper = document.createElement("div");
    const input = document.createElement("input");
    const btn = document.createElement("button");
    const listItem = document.createElement("div");

    container.id = "active";
    container.className = `row rounded mx-0 bg-${this.color} `;

    wrapper.classList = `col input-group list-wrapper`;
    input.classList = `input-dropdown form-control form-control-lg py-4 rounded-left border-0 text-white bg-${this.color}`;
    input.id = `input-${this.type}`;
    input.type = "text";
    input.name = this.type;
    input.placeholder = `Rechercher un ${this.type.substr(0,his.type.length - 1)}`;

    btn.classList = `input-group-text px-3 rounded-right border-0 text-white bg-${this.color}`;
    btn.innerHTML = `<i class="fas fa-chevron-up"></i>`;

    listItem.classList = `rounded-bottom border-0 text-white bg-${this.color} result`;

*/