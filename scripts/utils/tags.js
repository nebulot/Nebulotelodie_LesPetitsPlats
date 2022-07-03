import { closeTags } from "../index.js";

const dropdownsBar = document.querySelector(".btns-dropdown");
const tags = document.querySelector(".tags");
const ingredients = dropdownsBar.querySelectorAll (".ingredients");
const appliances = dropdownsBar.querySelectorAll (".applainces");
const ustensiles = dropdownsBar.querySelectorAll (".ustensiles");
const chooseDrop = {"ingredients" : ingredients, "appliance" : appliances, "ustensils" : ustensiles}


///////// 8  TAGS  /////////
export class Tag {
    //static #idNum = 0;
    constructor(type, txt) {
        this.type = type;
        this.txt = txt;
        this.color = this.defColor();
        //this.idNum = Tag.#idNum++;
    }
    defColor() {
        switch (this.type) {
            case 'ingredients':
                return 'primary';
            case 'appareils':
                return 'success';
            case 'ustensiles':
                return 'danger';
            default:
                console.log('ERROR ');
        }
    }
    make() {
        const tag = document.createElement('button');
        tag.classList = `btn tag w-auto rounded d-flex align-items-center text-white bg-${this.color}`;
        //tag.id = `id#${this.idNum}`;
        tag.innerHTML = `${this.txt} <span><i class="far fa-times-circle ms-2"></i></span>`;
        tag.addEventListener('click', closeTags);
        return tag;
    }
}

 // create tagList but now addtag 
 function addTag(type,target){
    const tag = new Tag(type, target.innerHTML).make();
    tags.appendChild(tag);
   }

   //create tagList or listItem for the third button
   let hiddenTags = [];
   // tags condition
   export function listTags(type, list = null) {
    const [tagContainer] = [...chooseDrop[type]].filter(el => el.classList.contains(type) && el.id == "active");
    const tagResults = tagContainer.querySelector(".tag-result");
   

   //display tags   [type] is not iterable
   let tagList = getTags(type);
   let noneList = list ? list : tagList;
   tagContainer.dataset.list = tagList;
   tagResults.innerHTML = "";
   for (tag of noneList) {
    if (!hiddenTags.includes(tag)){
        tagResults.innerHTML += `<a href ="#" class = "tag ${type}">${tag}</a>`
    }
   }
   //and now event when you click on the tag you see the recipe's result.
   tagResults.childNodes.forEach(el => {
    if (el.classList.contains("tag")){
        el.addEventListener('click', function() {addTag(type,this)})
    }
    });
   }



