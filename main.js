var full_name;
var courseArray = ["CS 180", "MA 161", "SCLA 101", "ENGL 106"];
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
//var firebase = require("firebase/app");

// Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");

$(document).ready((event) => {
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

    for (i = 0; i < courseArray.length; i++) {
        $("ul").append("<li><span class='trash'><i class='fa fa-trash'></i></span>" + courseArray[i] + "</li>");
        console.log(courseArray);
    }

    // $(".course-list").click(function (e) {
    //     console.log(e.target.text);
    // });

    // $(".delete-course").click((e) => {
    //     console.log(courseArray[e.target.id]);
    //     courseArray.splice(e.target.id, 1);
    //     console.log(courseArray);
    //     renderCourseList();
    // });



    $("ul").on("click", "li", function () {
        $(this).toggleClass("completed");
    });

    $("ul").on("click", ".trash", function (event) {
        $(this).parent().fadeOut(500, function () {
            courseArray.splice(courseArray.indexOf($(this).text()), 1);
            console.log($(this).text());
            console.log(courseArray);
            $(this).remove();
        });
        event.stopPropagation();
    });

    $("input[type='text']").keypress(function (event) {
        if (event.which === 13) {
            var todoText = $(this).val();
            $(this).val("");
            courseArray.push(todoText);
            $("ul").append("<li><span class='trash'><i class='fa fa-trash'></i></span>" + todoText + "</li>");
        }
    });

    $(".fa-plus").click(function () {
        $("input[type='text']").fadeToggle();
    });
});

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

// function renderCourseList() {
//     $('li').remove();
//     for (i = 0; i < courseArray.length; i++) {
//         $('ul').append("<li><a class='course-list' href='#'>" + courseArray[i] + "</a> - <button class='delete-course' id='" + i + "'>-</button></li>");
//     }
// }