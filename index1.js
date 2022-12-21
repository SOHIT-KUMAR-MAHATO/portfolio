let tgm =document.querySelector(".tgm");

let ck= document.querySelector(".items");
let drp= document.querySelector(".drp");
drp.addEventListener('click',()=>{
        ck.classList.toggle("dis");   
    })

    let toggle_button1 = document.querySelector(".ri-radio-button-line");
    let ln = document.getElementsByClassName("ln1");
    ln= Array.from(ln);
    let toggle_button= document.querySelector(".ri-sun-line");
    let header=document.querySelector("header");
    let cont= document.querySelector(".cont");
    let container= document.querySelector(".container")
    toggle_button.addEventListener('click',()=>{
        container.classList.toggle("black");
        cont.classList.toggle("black2");
        tgm.classList.toggle("wht");
        header.classList.toggle("fw");
        toggle_button.classList.toggle("ri-sun-line");
        toggle_button.classList.toggle("black2");
        toggle_button.classList.toggle("ri-star-line");
        let i=0;
        for(let i in ln){
            ln[i].classList.toggle("wht");
        }
})
ul=document.querySelector(".aa");
tgm.addEventListener('click',()=>{
        ck.classList.remove("dis"); 
        tgm.classList.toggle("ri-close-line");
        tgm.classList.toggle("ri-menu-line");
        ul.classList.toggle("vsi");
})
