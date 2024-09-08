var img = document.querySelector(`#left3`);
var img1 = document.querySelector("#left2");
img.addEventListener("mouseenter", function() {
    img.innerHTML = "#life";
    img.style.color = "white";
    img.style.paddingTop = "140px";
    img.style.paddingLeft = "20px";
    img.style.fontSize = "20px";
    img.style.textTransform = "uppercase";
    img.style.fontWeight = "600";
    img.style.backgroundImage = "url(https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg)"
})

img.addEventListener("mouseleave", function() {
    img.innerHTML = "#insulted";
    img.style.color = "white";
    img.style.paddingTop = "140px";
    img.style.paddingLeft = "20px";
    img.style.fontSize = "20px";
    img.style.textTransform = "uppercase";
    img.style.fontWeight = "600";
    img.style.backgroundImage = "url(https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg)"
})

img1.addEventListener("mouseenter", function() {
    img1.innerHTML = "#life";
    img1.style.color = "white";
    img1.style.paddingTop = "140px";
    img1.style.paddingLeft = "20px";
    img1.style.fontSize = "20px";
    img1.style.textTransform = "uppercase";
    img1.style.fontWeight = "600";
    img1.style.backgroundImage = "url(https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg)"
})