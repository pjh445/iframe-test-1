document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("#top header");
    const navBtn = document.querySelector("header button");
    const nav =    document.querySelector("header nav");
    const iframe = window.parent.document.getElementById("header");

    const navSlide = () => {       
        iframe.classList.add("slide");
        navBtn.textContent = "close";
    }

    const navHide = () => {
        iframe.classList.remove("slide");
        navBtn.textContent = "menu";
    }

    navBtn.addEventListener("click" , navSlide );
    header.addEventListener("click", navHide);

});//전체끝...................