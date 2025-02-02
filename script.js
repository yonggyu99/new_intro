const travelImg = document.querySelector(".travel-img");

travelImg.addEventListener("click", () => {
    if(travelImg.src.includes("like1.jpg")){
        travelImg.src = "images/like2.jpg";
    }
    else if(travelImg.src.includes("like2.jpg")){
        travelImg.src = "images/like3.jpg";
    }
    else{
        travelImg.src = "images/like1.jpg";
    }
});


document.querySelector('.profile-card').addEventListener('click', function () {
    this.classList.toggle('is-flipped');
});

