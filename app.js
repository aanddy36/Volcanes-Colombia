let toggle = document.querySelector(".fa-solid");
let menuToggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click",()=>{
    if(menuToggle.classList.contains("appear")){
        menuToggle.classList.remove("appear");
    }
    else{
        menuToggle.classList.add("appear");
    }
})