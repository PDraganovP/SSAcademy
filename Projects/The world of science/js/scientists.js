let moreInfo = document.getElementById("more-info");
moreInfo.style.display = "none";

function show() {
    let moreInfo = document.getElementById("more-info");
    moreInfo.style.display = "block";
    let readMore = document.getElementById("read-more");
    readMore.style.display = "none";
}

function hide() {
    let moreInfo = document.getElementById("more-info");
    moreInfo.style.display = "none";
    let readMore = document.getElementById("read-more");
    readMore.style.display = "inline";

}

let readMore = document.getElementById("read-more");
readMore.addEventListener("click", show);
let readLess = document.getElementById("read-less");
readLess.addEventListener("click", hide);


let slideIndex = 0;
sliderEngine();

function sliderEngine() {
    let slideElements = document.getElementsByClassName("slide");
    for (let i = 0; i < slideElements.length; i++) {
        slideElements[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slideElements.length) {
        slideIndex = 1;
    }
    slideElements[slideIndex - 1].style.display = "block";

    setTimeout(sliderEngine, 2000)
}

