// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function showPage(shown) {
    var sections = document.querySelectorAll("section");
    sections.forEach(function (navElement) {
        navElement.style.display = "none"
    })
    document.getElementById(shown).style.display = 'block';
    if (screen.width < 720)
        closeNav();
}

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('Profile').style.display = 'block';
});
