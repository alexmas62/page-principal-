const bouton = document.querySelector("#button");
const body = document.querySelector("body");
let video = document.querySelector("#light");
let source =document.querySelector("#source");


bouton.addEventListener("click", function(){
    
    if (source.getAttribute("src") === "light.mp4") {

        source.setAttribute("src","dark.mp4");
    } else {
        source.setAttribute("src","light.mp4");
    }
    video.load()
    console.log(source.getAttribute("src"));
});