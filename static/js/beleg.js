let active = 0;

function init(){
    // Zero State setting
    const opties = document.querySelectorAll(".optie");
    opties[0].classList.add("visible");
    opties[0].click();
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");
    const obj = {
        prev,
        next
    }
}

// First Initialize
init() 