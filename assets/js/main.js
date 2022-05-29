const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

/*=============== SHOW MENU ===============*/
// validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}

/*============== MENU HIDDEN ===============*/
// validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
        //when we click on each link, we remove the menu
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))
    /*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header")
        //when the scroll is greater than 80viewport height, add the class scroll header to the tag header
    if (this.scrollY >= 80)
        header.classList.add("scroll-header")
    else
        header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)
    /*=============== TESTIMONIAL SWIPER ===============*/
var swiper = new Swiper(".testimonial-wrapper", {
    loop: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: 'true',
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
//get all sections that have an id  defined

const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll events

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    //get current scroll position

    let scrollY = window.pageYOffset;

    // now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link");
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link");
        }


    })
}
/*=============== PORTFOLIO ITEM FILTER ===============*/
const filterContainer = document.querySelector(".portfolio-filter-inner"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener('click', function() {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            } else {
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.add("show");
            }
        }
    })
}
/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
const themeCloser = document.querySelector('#close-btn')
    //open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
    themeModal.style.transform = 'translateX(0)';
    // themeModal.style.background = 'rgba(0, 0, 0, .6)';
}
theme.addEventListener("click", openThemeModal);

//close modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
        // themeModal.style.transform = 'translateX(100vw)';
        // themeModal.style.background = '0';

    }
}
themeCloser.addEventListener('click', () => {
    themeModal.style.display = 'none';
})

theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

/*===== FONTS =====*/

//remove active class from span or font size selector
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '12px';
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '14px';
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '18px';
        }
        //change fontsize of the html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

/*===== PRIMARY COLORS =====*/
// $(document).ready(function() {


//     let $btns = $('.project-area .button-group button');


//     $btns.click(function(e) {

//         $('.project-area .button-group button').removeClass('active');
//         e.target.classList.add('active');

//         let selector = $(e.target).attr('data-filter');
//         $('.project-area .grid').isotope({
//             filter: selector
//         });

//         return false;
//     })

//     $('.project-area .button-group #btn1').trigger('click');

//     $('.project-area .grid .test-popup-link').magnificPopup({
//         type: 'image',
//         gallery: { enabled: true }
//     });


//     // Owl-carousel

//     $('.site-main .about-area .owl-carousel').owlCarousel({
//         loop: true,
//         autoplay: true,
//         dots: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             560: {
//                 items: 2
//             }
//         }
//     })

//     // sticky navigation menu

//     let nav_offset_top = $('.header_area').height() + 50;

//     function navbarFixed() {
//         if ($('.header_area').length) {
//             $(window).scroll(function() {
//                 let scroll = $(window).scrollTop();
//                 if (scroll >= nav_offset_top) {
//                     $('.header_area .main-menu').addClass('navbar_fixed');
//                 } else {
//                     $('.header_area .main-menu').removeClass('navbar_fixed');
//                 }
//             })
//         }
//     }

//     navbarFixed();

// });
//remove active class from color

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
colorPalette.forEach(color => {
        color.addEventListener('click', () => {
            let primaryHue;
            changeActiveColorClass();
            if (color.classList.contains('color-1')) {
                primaryHue = 252;
            } else if (color.classList.contains('color-2')) {
                primaryHue = 52;
            } else if (color.classList.contains('color-3')) {
                primaryHue = 352;
            } else if (color.classList.contains('color-4')) {
                primaryHue = 152;
            } else if (color.classList.contains('color-5')) {
                primaryHue = 202;
            } else if (color.classList.contains('color-6')) {
                primaryHue = 28.71;
            } else if (color.classList.contains('color-7')) {
                primaryHue = 332.27;
            }
            color.classList.add("active");
            root.style.setProperty('--primary-color-hue', primaryHue);
        })
    })
    /*===== THEME BACKGROUNDS =====*/

let lightColor;
let whiteColor;
let fontColor;

//change background color
const changeBG = () => {
    root.style.setProperty("--color-light", lightColor);
    root.style.setProperty("--color-white", whiteColor);
    root.style.setProperty("--color-font", fontColor);

}
Bg1.addEventListener('click', () => {



    lightColor = "#e7e4f1";
    whiteColor = "#f6f5fa";
    fontColor = "black";
    //add active class
    Bg1.classList.add('active');

    //remove active class

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    //remove customized changes from local storage
    // window.location.reload();
    changeBG();

})
Bg2.addEventListener('click', () => {
    // lightColor = '#15202B';
    lightColor = '#26272C';
    // whiteColor = '#334761';
    whiteColor = '#1C1D21';
    fontColor = "white";
    //add active class
    Bg2.classList.add('active');

    //remove active class

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();

})

Bg3.addEventListener('click', () => {
    lightColor = 'black';
    // whiteColor = '#373737';
    whiteColor = '#1C1C1C';
    fontColor = "white";
    //add active class
    Bg3.classList.add('active');

    //remove active class

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})



const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification-active')

        })
        target.classList.add('qualification-active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification-active')
        })
        tab.classList.add('qualification-active')
    })
})

// =========== contact =========

const inputs = document.querySelectorAll(".input");

function focusFunc() {

    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})



// =================contact 2========================

const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const commentInput = document.querySelector('#comment');




form.addEventListener('submit', (event) => {

    validateForm();
    console.log(isFormValid());
    if (isFormValid() == true) {
        form.submit();
    } else {
        event.preventDefault();
    }

});

function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    return result;

}

function validateForm() {
    //USERNAME
    if (usernameInput.value.trim() == '') {
        setError(usernameInput, 'Name can not be empty');
    } else if (usernameInput.value.trim().length < 5 || usernameInput.value.trim().length > 15) {
        setError(usernameInput, 'Name must be min 5 and max 15 charecters');
    } else {
        setSuccess(usernameInput);
    }
    //EMAIL
    if (emailInput.value.trim() == '') {
        setError(emailInput, 'Provide email address');
    } else if (isEmailValid(emailInput.value)) {
        setSuccess(emailInput);
    } else {
        setError(emailInput, 'Provide valid email address');
    }

    //phone
    if (phoneInput.value.trim() == '') {
        setError(phoneInput, 'phone can not be empty');
    } else if (phoneInput.value.trim().length < 6 || phoneInput.value.trim().length > 20) {
        setError(phoneInput, 'phone min 6 max 20 charecters');
    } else {
        setSuccess(phoneInput);
    }
    //Comment
    if (commentInput.value.trim() == '') {
        setError(commentInput, 'Comment can not be empty');
    } else {
        setSuccess(commentInput);
    }

    // form.reset();
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');

}

function isEmailValid(email) {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}