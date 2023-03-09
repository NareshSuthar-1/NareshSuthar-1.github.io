const project_cata_menu = document.querySelector(".project-list");
let project_cata_menu_items = document.querySelectorAll(".project-list-item");
console.log(project_cata_menu_items)
project_cata_menu_items.forEach(element => {
    element.addEventListener("click", () => {
        for (let index = 0; index < project_cata_menu_items.length; index++) {
            let element = project_cata_menu_items[index];
            element.classList.remove("active");
        }
        element.classList.add("active");

    })
});