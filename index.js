
        let ck= document.querySelector(".items");
        let drp= document.querySelector(".drp");
        let tgm =document.querySelector(".tgm");
        drp.addEventListener('click',()=>{
                ck.classList.toggle("dis");   
            })
       
            let toggle_button= document.querySelector(".ri-sun-line");
            let cont1= document.querySelector(".cont1");
            let container= document.querySelector(".container")
            toggle_button.addEventListener('click',()=>{
                tgm.classList.toggle("wht");
                container.classList.toggle("black");
                cont1.classList.toggle("black1");
                toggle_button.classList.toggle("ri-sun-line");
                toggle_button.classList.toggle("ri-star-line");
        })
        ul=document.querySelector(".aa");
        tgm.addEventListener('click',()=>{
                ck.classList.remove("dis"); 
                tgm.classList.toggle("ri-close-line");
                tgm.classList.toggle("ri-menu-line");
                ul.classList.toggle("vsi");
        })