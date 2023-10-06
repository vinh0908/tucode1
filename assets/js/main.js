const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper1 .image-list1")
    const slideButtons = document.querySelectorAll(".slider-wrapper1 .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        // updateScrollThumbPosition();
    });
}

window.addEventListener("load", initSlider);