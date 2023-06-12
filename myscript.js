const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false,
    startX, startScrollLeft;


let cardPerview = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerview).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});


carouselChildrens.slice(0, cardPerview).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = () => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    //R
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return; //if isDragging is false return from here
    //updates scroll position
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        console.log("You've reached to the left end");
    } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        console.log("You've reached to the right end");
    }
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);