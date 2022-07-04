///////// 8  TAGS  /////////
class Tag {
  static #idNum = 0;
  constructor(type, txt) {
    this.type = type;
    this.txt = txt;
    this.color = this.Color();
    this.idNum = Tag.#idNum++;
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
        console.log("ERROR ");
    }
  }
  make() {
    const tag = document.createElement("button");
    tag.classList = `btn tag w-auto rounded d-flex align-items-center text-white bg-${this.color}`;
    tag.id = `id#${this.idNum}`;
    tag.innerHTML = `${this.txt} <span><i class="far fa-times-circle ms-2"></i></span>`;
    tag.addEventListener("click", closeTags);
    return tag;
  }
}

/////// closeTags/////// => index.js global


