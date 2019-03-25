// import { constants } from "crypto";
import {breadSVG} from './breadSVG.js';
console.log("test")
console.log(breadSVG)
let active = 0;

function init(){
    const main = document.querySelector("main");
    main.classList.remove("zonderJS");
    removeElements(main)
    main.insertAdjacentHTML('beforeend', breadSVG());

    // Zero State setting
    const allLabels = document.querySelectorAll("label");
    allLabels[0].classList.add("visible");
    allLabels[0].click();
    setBreadColors("Bruin");
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    const obj = {
        prev,
        next
    }
    addEvents(obj);
    arrowSettings()
}

function removeElements(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


function addEvents(obj){
    obj.next.addEventListener("click", selection);
    obj.prev.addEventListener("click", selection);
}
function selection(){
    const allLabels = document.querySelectorAll("#keuzes label");
    if(this.id === "next" && active < (allLabels.length-1)){
        active++;
    }
    else if(this.id === "prev" && active > 0){
        active--;
    }
    else if(active === (allLabels.length-1)){
        active = (allLabels.length-1);
    }
    else{
        active = 0;
    }
    arrowSettings()
    allLabels.forEach(label=>label.classList.remove("visible"));
    allLabels[active].classList.add("visible");
    console.log(allLabels[active].textContent.split(" ")[0])
    allLabels[active].click();
    setBreadColors(allLabels[active].textContent.split(" ")[0]) 
}

function arrowSettings(){
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    next.classList.remove("disabled");
    prev.classList.remove("disabled");
    if(active === 0 ){
        prev.classList.add("disabled");
    }else if(active === (document.querySelectorAll("#keuzes label").length -1)){
        next.classList.add("disabled");
    }
}


function setBreadColors(value){
    const breadObj = {
        innerBread : document.querySelector("#InnerBrood"),
        innerBreadShadow : document.querySelector("#InnerBroodShadow"),
        breadCrust : document.querySelector("#BroodKorst"),
        breadCrustShadow : document.querySelector("#BroodKorstShadow")
    }
    Object.values(breadObj).forEach(el=>{
        el.className = value
    });
}

function checkQuerySelector(element){
    if(document.querySelector){
        return document.querySelector(element)
    }else{
        console.log("why?")
    }
}
console.log(document)
document.querySelector("div")
console.log(checkQuerySelector("div"))

// First initializing
init();