document.addEventListener("DOMContentLoaded", () => {

    const navBtn = document.querySelector("header button");
    const nav =    document.querySelector("header nav");
    const iframe = window.parent.document.getElementById("header");

    const navSlide = () => {
        alert(33);
        iframe.classList.add("slide");
    }

    navBtn.addEventListener("click" , navSlide );

});//전체끝...................
