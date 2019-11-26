

const imageContainer = document.querySelectorAll(".sub_mario");


imageContainer.forEach(ele => ele.hidden = true);
window.addEventListener('scroll', function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 1500) {
        if (imageContainer[0].hidden == true) {
            imageContainer[0].hidden = false;
            imageContainer[0].style.animation = "fadein .8s";
            imageContainer[0].addEventListener('animationend', function () {
                imageContainer[0].style.animation = "none";
            })
        }
    }
    if (window.pageYOffset > 2500) {
        if (imageContainer[1].hidden == true) {
            imageContainer[1].hidden = false;
            imageContainer[1].style.animation = "fadein-right .8s";
            imageContainer[1].addEventListener('animationend', function () {
                imageContainer[1].style.animation = "none";
            })
        }
    }
    if (window.pageYOffset > 3500) {
        if (imageContainer[2].hidden == true) {
            imageContainer[2].hidden = false;
            imageContainer[2].style.animation = "fadein .8s";
            imageContainer[2].addEventListener('animationend', function () {
                imageContainer[2].style.animation = "none";
            })
        }
    }
})

