var full_name;

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

    localStorage.setItem("last", shown);
}

window.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem("last")) {
        document.getElementById(localStorage.getItem("last")).style.display = 'block';
    } else {
        document.getElementById('Profile').style.display = 'block';
        localStorage.setItem("last", "Profile");
    }

    full_name = document.getElementById("full_name");
    if (full_name) {
        $.get("https://jsonplaceholder.typicode.com/todos/1", function (data, status) {
            full_name.innerHTML = "" + data.title
        });
    }


});