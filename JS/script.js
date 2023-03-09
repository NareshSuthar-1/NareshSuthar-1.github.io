// 1-PRE LODER
// 1- THEME TOGGLE BUTTON
// 2- NAVBAR TOGGLE BUTTON
// -CONTACT
// -FOOTER -NOT
// -FLOTING SOCIAL LINKS 

// ****************************   PRE LODER   ********************************

const Loging = document.getElementById("Loging");

function BrnadAnimationFun(params) {
    let BrandLine1 = document.querySelector(".logo-outline-1");
    BrandLine1.style.width = "100%";
    let BrandLine2 = document.querySelector(".logo-outline-2");
    BrandLine2.style.width = "100%";
    setTimeout(() => {
        BrandLine2.classList.add("active");
        BrandLine1.classList.add("active");
    }, 700);
    let BradndNmae = document.querySelector(".Brand-name");
    BradndNmae.style.animation = "BrandLogoAni 1s forwards";
    BradndNmae.style.animationDelay = "1.5s";
}

function LodoDoc(params) {
    setTimeout(() => {
        Loging.style.display = "none";
        // BRAND NAME ANIMATION 
        BrnadAnimationFun();
    }, 3000);
}

// *************************  THEME TOOGLE (DARK / LIGHT)   ***************************
// Get the theme toggle input
const themeToggle = document.getElementById("DarkMode");

// Get the current theme from local storage
const currentTheme = localStorage.getItem("theme");

// If the current local storage item can be found
if (currentTheme) {
    // Set the body data-theme attribute to match the local storage item
    document.documentElement.setAttribute("data-theme", currentTheme);

    // If the current theme is dark, check the theme toggle
    if (currentTheme === "dark") {
        themeToggle.checked = true;
        themeToggle.parentElement.style.background = `linear-gradient(270deg, #8743FF 0%, #4136F1 100%)`;
    }
}
// Function that will switch the theme based on the if the theme toggle is checked or not
function switchTheme(e) {
    if (e.target.checked) {
        themeToggle.parentElement.style.background = `linear-gradient(270deg, #8743FF 0%, #4136F1 100%)`;
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.parentElement.style.background = "";
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

// Add an event listener to the theme toggle, which will switch the theme
themeToggle.addEventListener("change", switchTheme, false);
// *************************  NAVBAR TOOGLE BUTTON   ***************************
const ToggleBtn = document.querySelector("#ToggleBtn");
const navbarMenu = document.getElementById("navbarMenu");
let navItem = document.querySelectorAll(".nav-item");
let ToggleBtnBol;
// ----
function OpenNavMenu() {
    ToggleBtnBol = ToggleBtn.classList.toggle("active");
    let Togglerightval = ToggleBtn.getBoundingClientRect().left;
    if (ToggleBtnBol) {
        let delay = 0;
        navbarMenu.style.animation = "";
        navbarMenu.style.animation = `NavBarExpAnimation ease 0.8s 1 ${delay}s forwards`;

        delay = 0.7;
        for (let index = 0; index < navItem.length; index++) {
            let element = navItem[index];
            element.style.animation = "fadeInRight 1s 1 forwards";
            element.style.animationDelay = delay + "s";
            delay = delay + 0.3;
        }
        if (window.innerWidth < 778) {
            themeToggle.parentElement.style = "display: flex;position: absolute;z-index: 555;";
        }
        setTimeout(() => {
            ToggleBtn.style.position = "fixed";

            ToggleBtn.style.left = Togglerightval + "px";

        }, 1000);
    } else {
        navbarMenu.style.animation = "";

        let delay = 0;
        for (let index = 0; index < navItem.length; index++) {
            let element = navItem[index];
            element.style.animation = "fadeOutRight 1s 1 backwards";
            element.style.animationDelay = delay + "s";
            delay = delay + 0.1;
        }
        navbarMenu.style.animationDelay = delay + 0.5 + "s";
        navbarMenu.style.animation = `NavBarColapseAnimation ease 1s 1 backwards ${delay + 0.3}s`;
        if (window.innerWidth < 778) {
            themeToggle.parentElement.style = "display: none;position: unset;z-index: 555;";
        }
        setTimeout(() => {
            ToggleBtn.style.position = "unset";
            ToggleBtn.style.left = "unset";

        }, 500);
    }
}
ToggleBtn.addEventListener("click", (e) => {


    // ToggleBtnBol = ToggleBtn.classList.toggle("active");
    OpenNavMenu();

});

// link active 
navItem.forEach(element => {
    element.addEventListener("click", () => {
        OpenNavMenu()
    })
});
// <!-- ---------------------------  FLOTING SOCIAL LINKS -------------------------------------- -->
const MoreBtn = document.querySelector(".MoreBtn");
const bottonLinks = document.querySelector(".botton-links");
const TopLinks = document.querySelector(".top-links");

function FlotingSocialLink(delay, translateY) {
    let Delay = delay;
    let TranslateY = translateY;
    bottonLinks.firstElementChild.style.transitionDelay = Delay;
    bottonLinks.lastElementChild.style.transitionDelay = Delay;
    bottonLinks.firstElementChild.style.transform = TranslateY;
    bottonLinks.lastElementChild.style.transform = TranslateY;
    // top
    TopLinks.firstElementChild.style.transitionDelay = Delay;
    TopLinks.lastElementChild.style.transitionDelay = Delay;
    TopLinks.firstElementChild.style.transform = TranslateY;
    TopLinks.lastElementChild.style.transform = TranslateY;
}
FlotingSocialLink("var(--tr-delay)", "translateY(var(--He))");
MoreBtn.classList.add("active");
MoreBtn.addEventListener("click", () => {
    let BolBtn = MoreBtn.classList.toggle("active");
    if (BolBtn) {
        FlotingSocialLink("var(--tr-delay)", "translateY(var(--He))");
    } else {
        FlotingSocialLink("var(--tr-delay)", "");
    }
});
// -----------------------------  SCROLL TO TOP BUTTON  
var mybutton = document.getElementById("ScrllToTOPbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function ScrollToTOP() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}