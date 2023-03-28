var swiper = new Swiper('.swiper',{
    slidesPerview: 1,
    spacebetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableoninteraction: false
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewhell: true,
    keyboard: true,
})

let btn = document.querySelector(".btn")
let input1 = document.querySelector(".input1")
let listdiv = document.querySelector(".listdiv")

btn.addEventListener('click',() =>{
    if(input1.value !=""){
        let elem = document.createElement("div")
        elem.classList.add("listElem")
        listdiv.append(elem)
    
        let head1 = document.createElement("h1")
        head1.classList.add("head2")
        head1.innerText = input1.value
        elem.append(head1)   
    
        let igm = document.createElement("img")
        igm.classList.add("igm")
        elem.append(igm)   
    }
})