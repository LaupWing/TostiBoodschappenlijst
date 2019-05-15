// import {addClickKeuze} from '/helper.js'
let active = 0;
// addClickKeuze()

function init(){
    // Zero State setting
    const opties = document.querySelectorAll(".optie");
    const belegCategorien = document.querySelectorAll(".beleg-categorie-opties");
    opties[0].classList.add("visible");
    belegCategorien[0].classList.add("visible");
    opties[0].click();
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    const obj = {
        prev,
        next,
        checkboxes
    }
    addEvents(obj);
    arrowState()
}

function arrowState(){
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    next.classList.remove("disabled");
    prev.classList.remove("disabled");
    if(active === 0 ){
        prev.classList.add("disabled");
    }else if(active === (document.querySelectorAll(".optie").length -1)){
        next.classList.add("disabled");
    }
}

function addEvents(obj){
    obj.next.addEventListener("click", selectCategorie);
    obj.prev.addEventListener("click", selectCategorie);
    obj.checkboxes.forEach(checkbox=>checkbox.addEventListener('click', selectBeleg));
}

function selectBeleg(){
    const matchingImg = document.querySelector(`label[for="${this.id}"] img`).cloneNode(true);
    const belegKeuzes = document.querySelector('.beleg-keuzes')
    console.log(this.id.includes('None'))
    if(!this.id.includes('None')){
        if(checkExistence(document.querySelectorAll('.beleg-keuzes img'),matchingImg)){
            console.log("img doesnt existy yeet")
            const newDiv = document.createElement('div')
            newDiv.appendChild(matchingImg)
            newDiv.classList.add('centering')
            belegKeuzes.insertAdjacentElement('beforeend',newDiv)
        }else{
            belegKeuzes.querySelectorAll('img').forEach(img=>{
                console.log(matchingImg)
                console.log(img)
                if(matchingImg.src===img.src){
                    const deleteThisOne = img.parentElement
                    belegKeuzes.removeChild(deleteThisOne)
                }
            })
        }
    }else{
        const parent = this.parentElement
        parent.querySelectorAll('input[type="checkbox"]').forEach(checkbox=>{
            checkbox.checked = false;
        })
        parent.querySelectorAll('label img').forEach(img=>{
            belegKeuzes.querySelectorAll('img').forEach(img2=>{
                if(img.src === img2.src){
                    belegKeuzes.removeChild(img2.parentElement)
                }
            })
        })
        console.log(tparent.parentElement)
    }
}

function checkExistence(listOfNodes, element){
    for(let i=0;i<listOfNodes.length;i++){
        if(listOfNodes[i].src === element.src){
            return false
        }
    }
    return true
}

function selectCategorie(){
    console.log('click')
    const opties = document.querySelectorAll(".optie");
    const belegOpties = document.querySelectorAll(".beleg-categorie-opties");
    if(this.id === "next" && active < (opties.length-1)){
        active++;
    }
    else if(this.id === "prev" && active > 0){
        active--;
    }
    else if(active === (opties.length-1)){
        active = (opties.length-1);
    }
    else{
        active = 0;
    }
    arrowState()
    console.log(belegOpties, active)
    belegOpties.forEach(belegOptie=>belegOptie.classList.remove("visible"));
    belegOpties[active].classList.add("visible");
    console.log(belegOpties[active])
    opties.forEach(optie=>optie.classList.remove("visible"));
    opties[active].classList.add("visible");
}




// First Initialize
init() 