let ck= document.querySelector(".items");
let drp= document.querySelector(".drp");
let tgm =document.querySelector(".tgm");
let cont1= document.querySelector(".contt");
let white= document.getElementsByClassName("js");
drp.addEventListener('click',()=>{
        ck.classList.toggle("dis");   
    })
let toggle_button= document.querySelector(".ri-sun-line");
white=Array.from(white);
            let container= document.querySelector(".container")
            toggle_button.addEventListener('click',()=>{
                container.classList.toggle("black");
                cont1.classList.toggle("black1");
                tgm.classList.toggle("wht");
                toggle_button.classList.toggle("ri-sun-line");
                toggle_button.classList.toggle("ri-star-line");
                for( let i in white)
                {
                    white[i].classList.toggle("ad");
                }
        })
        ul=document.querySelector(".aa");
        tgm.addEventListener('click',()=>{
                ck.classList.remove("dis"); 
                tgm.classList.toggle("ri-close-line");
                tgm.classList.toggle("ri-menu-line");
                ul.classList.toggle("vsi");
        })