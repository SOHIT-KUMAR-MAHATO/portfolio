let ul=document.querySelector(".aa");
let ck= document.querySelector(".items");
let drp= document.querySelector(".drp");
let ann = document.querySelectorAll(".flip-card-front"); 
let eduDescription = document.querySelector(".eduDescription");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    for (let i = 0; i < ann.length; i++) {
      ann[i].style.animation="eff 0.8s ease-in-out";
    }
    // alert(1);
  }else{
    for (let i = 0; i < ann.length; i++) {
      ann[i].style.animation="ef 1s ease-in-out";
    }
  }

  if (document.body.scrollTop >90 || document.documentElement.scrollTop >90) {
      eduDescription.style.animation="eff2 1.5s ease-in-out";
  }
 else{
  eduDescription.style.animation="eff3 1s ease-in-out";
 }
}
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
let tgm =document.querySelector(".tgm");
let cont1= document.querySelector(".contt");
let white= document.getElementsByClassName("js");
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