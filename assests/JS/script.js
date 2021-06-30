// ---------------------------------------------------------------------------------------------------
//                                 Toogle Button code start here 
let toogle_btn = document.querySelector(".toogle-btn");
function ToogleNavBar() {
    let navbar = document.querySelector(".navbar");
    let p = navbar.classList.toggle("show");
    if (p === true) {
        console.log("nav shown " + " " + p)
        toogle_btn.innerHTML = `<i class="fas fa-times"></i>`;
    } else {
        console.log("hideeen " + " " + p)
        toogle_btn.innerHTML = `<i class="fas fa-bars"></i>`;
    }
};
toogle_btn.addEventListener("click", ToogleNavBar);
//                                  Toogle Button code End here 
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
//                              Active link Item code start here 
let nav_item = document.querySelectorAll(".nav > .nav-item");
nav_item.forEach(element => {
    element.addEventListener("click", function () {
        ToogleNavBar();

        for (let i = 0; i < nav_item.length; i++) {
            nav_item[i].classList.remove("active");
        }
        element.classList.add("active");
    });
});
//                            Active link Item code End here 
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
//                  AUTOMATIC  Active link Item On SCROLL code Start here 
function AutoActiveTab() {
    let sections = document.querySelectorAll(".section");
    sections.forEach(element => {
        let postition = window.innerHeight;
        let getCurentPostion = element.getBoundingClientRect().top;
        if (postition > getCurentPostion) {
            let id = "#" + element.id;
            nav_item.forEach(element => {
                let nav = element.firstElementChild;
                let navLink = nav.getAttribute("href");
                if (id === navLink) {
                    element.classList.add("active");
                }
                else {
                    element.classList.remove("active");

                }
            });
        }
    });
};
window.addEventListener("scroll", AutoActiveTab);
//                      AUTOMATIC  Active link Item On SCROLL code END here 
// ---------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------
//                               Sticky NAVBAR code Start here 

window.addEventListener("scroll", function () {
    console.log(window.pageYOffset)
    let header = document.querySelector(".header");
    if (window.scrollY > 5) {
        header.classList.add("sticky");
        nav_item.forEach(element => {
            element.classList.add("outline");
            element.firstElementChild.style.color = "white";

        });
    }
    else {
        nav_item.forEach(element => {
            element.classList.remove("outline");
        });
        header.classList.remove("sticky");

    }
    // ---------------------------------------
    if (window.pageYOffset > 1300) {
        let js_range = this.document.querySelector("#js-range");
        js_range.style.width = 60 + "%";
        let cLang_range = this.document.querySelector("#cLang-range");
        cLang_range.style.width = 40 + "%";
    }
    // project setion

    let project_img = this.document.querySelector(".project-img");
    let project_imgPosition = project_img.getBoundingClientRect().top;
    let ScreenPosition = this.window.innerHeight;
    // console.log("new   " + project_imgPosition + " "+ ScreenPosition)
    if (project_imgPosition < ScreenPosition) {
        project_img.classList.add("backInLeft");

    }
    else {
        project_img.classList.remove("backInLeft");
    }
});
//                                  Sticky NAVBAR code Ends here 
// ---------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------
//                                  PRELODER CODE Start here.................. 
let preloder = document.getElementById("preloder");
window.addEventListener("load", function () {
    preloder.style.display = "none";
    // banner code
    let banner_img = document.getElementById("banner-img");
    banner_img.style.transform = "translateX(" + 0 + "px) scale(" + 1 + ")";
})
//                                  PRELODER CODE End here..................
// ---------------------------------------------------------------------------------------------------
