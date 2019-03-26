let active = 0;

function init(){
    // Zero State setting
    const opties = document.querySelectorAll(".optie");
    opties[0].classList.add("visible");
    opties[0].click();
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


function addEvents(obj){
    obj.next.addEventListener("click", arrowClick);
    obj.prev.addEventListener("click", arrowClick);
}

function selection(currentEl){
    const opties = document.querySelectorAll("#keuzes .optie");
    if(currentEl.id === "next" && active < (opties.length-1)){
        active++;
    }
    else if(currentEl.id === "prev" && active > 0){
        active--;
    }
    else if(active === (opties.length-1)){
        active = (opties.length-1);
    }
    else{
        active = 0;
    }
    arrowSettings()
    opties.forEach(optie=>optie.classList.remove("visible"));
    opties[active].classList.add("visible");
    const value = opties[active].textContent.split(" ")[0]
    return value
}

function arrowClick(){
    setBreadColors(selection(this));
    const labels = document.querySelectorAll('label'); 
    labels[active].click();
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
    const array = [
        document.querySelector("#InnerBrood"),
        document.querySelector("#InnerBroodShadow"),
        document.querySelector("#BroodKorst"),
        document.querySelector("#BroodKorstShadow")
    ]

    array.forEach(item=>{
        item.removeAttribute("class")
        item.classList.add(value)
    });
}

// First initializing
init();