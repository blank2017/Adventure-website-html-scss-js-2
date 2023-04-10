let listNav = document.querySelectorAll('header nav ul li a');

listNav.forEach((item) => {
    item.onclick = () => {
        listNav.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    }
});




let nav = document.querySelector('header nav');

document.getElementById('toggle-menu').onclick =() => {
    nav.classList.add('active');
}

document.getElementById('nav-close').onclick =() => {
    nav.classList.remove('active');
}

window.onscroll = () => {
    nav.classList.remove('active');
}


let searchForm = document.querySelector('.search-form');

document.getElementById('search-btn').onclick =() => {
    searchForm.classList.add('active');
}

document.getElementById('close-search').onclick =() => {
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    nav.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
}

window.onload = () => {
    nav.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
}

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

});

var swiper = new Swiper(".product-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        1024:{
            slidesPerView: 4,
        },
        
    }
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
    }
});

var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
    }
});

var swiper = new Swiper(".clients-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,


    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },

        640:{
            slidesPerView: 2,
        },

    }
});