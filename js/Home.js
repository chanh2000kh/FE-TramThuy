$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1500,
        responsive: {
            600: {
                items: 4
            }
        }
    });
});


var listHomeGallery = document.querySelectorAll('.home-gallery-item')
var prevBtn = document.querySelector(".home-gallery-btn-left")
var nextBtn = document.querySelector(".home-gallery-btn-right")

var currentIndex = 1;
function updateyContainerByIndex() {
    //remove home-gallery-item-1,2,3
    listHomeGallery.forEach(item => {
        item.classList.remove('home-gallery-item-1')
        item.classList.remove('home-gallery-item-2')
        item.classList.remove('home-gallery-item-3')
    })
    if (currentIndex > 0 && currentIndex < listHomeGallery.length - 1) {
        //add home-gallery-item-1,2,3
        listHomeGallery[currentIndex - 1].classList.add('home-gallery-item-1')
        listHomeGallery[currentIndex].classList.add('home-gallery-item-2')
        listHomeGallery[currentIndex + 1].classList.add('home-gallery-item-3')
    }
    if(currentIndex == 0)
    {
        //add home-gallery-item-1,2,3
        listHomeGallery[listHomeGallery.length - 1].classList.add('home-gallery-item-1')
        listHomeGallery[currentIndex].classList.add('home-gallery-item-2')
        listHomeGallery[currentIndex + 1].classList.add('home-gallery-item-3')
    }
    if(currentIndex == listHomeGallery.length - 1)
    {
        //add home-gallery-item-1,2,3
        listHomeGallery[currentIndex - 1].classList.add('home-gallery-item-1')
        listHomeGallery[currentIndex].classList.add('home-gallery-item-2')
        listHomeGallery[0].classList.add('home-gallery-item-3')
    }

}
prevBtn.addEventListener('click', e => {
    currentIndex = currentIndex - 1
    if(currentIndex < 0) currentIndex = listHomeGallery.length - 1
    updateyContainerByIndex()
})
nextBtn.addEventListener('click', e => {
    currentIndex = currentIndex + 1
    if(currentIndex > listHomeGallery.length - 1) currentIndex = 0
    updateyContainerByIndex()
})


