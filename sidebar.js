const showMenuButton = document.getElementById("showmwnuButton");
const hideMenuButton = document.getElementById("hidemenuButton");
const sideMenu = document.getElementById("sidemenu");

//-----------------  show ------------ sidebar
function showSidebar() {
    sideMenu.classList.add("show");
}

// hide --------------------sidebar

function hideSidebar() {
    sideMenu.classList.remove("show");
}

showMenuButton.addEventListener("click", showSidebar);

hideMenuButton.addEventListener("click", hideSidebar);
