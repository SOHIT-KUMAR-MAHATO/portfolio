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

let toggle_button = document.querySelector(".ri-sun-line");
let cont1 = document.querySelector(".cont1");
let container = document.querySelector(".container");
toggle_button.addEventListener("click", () => {
  tgm.classList.toggle("wht");
  container.classList.toggle("black");
  cont1.classList.toggle("black1");
  toggle_button.classList.toggle("ri-sun-line");
  toggle_button.classList.toggle("ri-star-line");
});
ul = document.querySelector(".aa");
tgm.addEventListener("click", () => {
  ck.classList.remove("dis");
  tgm.classList.toggle("ri-close-line");
  tgm.classList.toggle("ri-menu-line");
  ul.classList.toggle("vsi");
});
