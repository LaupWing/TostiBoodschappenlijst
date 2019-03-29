export function removeElements(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


export function selection(currentEl, active){
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
    arrowSettings(active)
    opties.forEach(optie=>optie.classList.remove("visible"));
    opties[active].classList.add("visible");
    const value = opties[active].textContent.split(" ")[0]
    return value
}

function arrowSettings(active){
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


export function addClickKeuze(){
    document.querySelectorAll('i').forEach(i=>{
        i.addEventListener('keypress',function(e){
            if(e.keyCode === 13){
                i.click()
            }
        })
    })
}