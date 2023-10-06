var slideImage = document.querySelector(".carousel3");
firstImage = slideImage.querySelectorAll(".carouselimg3")[0];
arrowIcons = document.querySelectorAll(".wrapper3 i");


var isDragStart = false,isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    var srcollWidth = slideImage.srcollWidth - slideImage.clientWidth; 
    arrowIcons[0].style.display = slideImage.srcollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = slideImage.srcollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // console.log(icon);
        var firstImageWidth = firstImage.clientWidth + 14;
        slideImage.scrollLeft += icon.id == "left2" ? -firstImageWidth : firstImageWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});

const autoSlide = () => {
    if(slideImage.srcollLeft == (slideImage.srcollWidth - slideImage.clientWidth)) return;

    // console.log(positionDiff);
    positionDiff = Math.abs(positionDiff);
    var firstImageWidth = firstImage.clientWidth + 14;
    var valDifference = firstImageWidth - positionDiff;

    if(slideImage.srcollLeft > prevScrollLeft) {
        return slideImage.srcollLeft += positionDiff > firstImageWidth / 4 ? valDifference : -positionDiff;  
    }
    slideImage.srcollLeft -= positionDiff > firstImageWidth / 4 ? valDifference : -positionDiff; 
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slideImage.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slideImage.classList.add("dragging3");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slideImage.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
} 

const dragStop = () => {
    isDragStart = false;
    slideImage.classList.remove("dragging3");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

slideImage.addEventListener("mousedown", dragStart);
slideImage.addEventListener("touchstart", dragStart);

slideImage.addEventListener("mousemove", dragging);
slideImage.addEventListener("touchmove", dragging);

slideImage.addEventListener("mouseup", dragStop);
slideImage.addEventListener("mouseleave", dragStop);
slideImage.addEventListener("touchend", dragStop);


