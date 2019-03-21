let active = 0;
function init(){
    const allLabels = document.querySelectorAll("label");
    allLabels[0].classList.add("visible");
    setBreadColors("Bruin");
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    const obj = {
        prev,
        next
    }
    addEvents(obj)
}

function addEvents(obj){
    obj.next.addEventListener("click", selection);
    obj.prev.addEventListener("click", selection);
}
function selection(){
    const allLabels = document.querySelectorAll("label");
    // if(this.id === "next"){
    //     active++
    //     allLabels.forEach(label=>label.classList.remove("visible"));
    //     allLabels[active].classList.add("visible");
    // }else if(active > 0){
    //     active--
    //     allLabels.forEach(label=>label.classList.remove("visible"));
    //     allLabels[active].classList.add("visible");
    // }else{
    //     console.log("FOOOOUT")
    // }
    console.log(allLabels.length)
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
    allLabels.forEach(label=>label.classList.remove("visible"));
    allLabels[active].classList.add("visible");
    console.log(allLabels[active].textContent.split(" ")[0])
    allLabels[active].click();
    setBreadColors(allLabels[active].textContent.split(" ")[0]) 
}

function setBreadColors(value){
    document.querySelector("#InnerBrood").removeAttribute("class")
    document.querySelector("#InnerBroodShadow").removeAttribute("class")  
    document.querySelector("#BroodKorst").removeAttribute("class")
    document.querySelector("#BroodKorstShadow").removeAttribute("class")

    document.querySelector("#InnerBrood").classList.add(value)
    document.querySelector("#InnerBroodShadow").classList.add(value)
    document.querySelector("#BroodKorst").classList.add(value)
    document.querySelector("#BroodKorstShadow").classList.add(value)
    // const breadObj = {
    //     innerBread : document.querySelector("#InnerBrood"),
    //     innerBreadShadow : document.querySelector("#InnerBroodShadow"),
    //     breadCrust : document.querySelector("#BroodKorst"),
    //     breadCrustShadow : document.querySelector("#BroodKorstShadow")
    // }
    // console.log(Object.values(breadObj))
    // Object.values(breadObj).forEach(value=>{
    //     console.log(value)
    //     value.classList.add(value)
    // });
}
// First initializing
init();