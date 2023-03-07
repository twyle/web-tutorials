const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar");


menuIcon.onclick = () => {
    sideBar.classList.toggle('small-sidebar')
}