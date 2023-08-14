let tgm =document.querySelector(".tgm");
let ul=document.querySelector(".aa");
let ck= document.querySelector(".items");
let drp= document.querySelector(".drp");
// for toggle menu

drp.addEventListener('click',()=>{
        ck.classList.toggle("dis");   
        check();
    })
    function check() {
        if (ck.classList.contains("dis")) {
          window.addEventListener("scroll", () => {
            ck.classList.remove("dis"); 
            tgm.classList.remove("ri-close-line");
            tgm.classList.add("ri-menu-line");
            ul.classList.remove("vsi");
          });
        }
      }
      // for hof body
    let toggle_button1 = document.querySelector(".ri-radio-button-line");
    let arrowImg = document.getElementsByClassName("arrowImg");
    arrowImg=Array.from(arrowImg);
    let ln = document.getElementsByClassName("ln1");
    let arr = document.getElementsByClassName("arr");
    arr=Array.from(arr);
    ln= Array.from(ln);
    let toggle_button= document.querySelector(".ri-sun-line");
    let header=document.querySelector("header");
    let cont= document.querySelector(".cont");
    let container= document.querySelector(".container");
    let pad = document.querySelector(".ln");
    toggle_button.addEventListener('click',()=>{
        container.classList.toggle("black");
        cont.classList.toggle("black2");
        tgm.classList.toggle("wht");
        header.classList.toggle("fw");
        toggle_button.classList.toggle("ri-sun-line");
        toggle_button.classList.toggle("black2");
        toggle_button.classList.toggle("ri-star-line");
        for(let i in ln){
            ln[i].classList.toggle("wht");
        }
        for(let i in arrowImg){
          arrowImg[i].classList.toggle("non");
        }
        for(let i in arr){
          arr[i].classList.toggle("ri-radio-button-line");
        }
        
        pad.classList.toggle("pad");
        pad.classList.toggle("hit");

        
})

tgm.addEventListener('click',()=>{
        ck.classList.remove("dis"); 
        tgm.classList.toggle("ri-close-line");
        tgm.classList.toggle("ri-menu-line");
        ul.classList.toggle("vsi");
})
