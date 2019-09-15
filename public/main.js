var courseArray = [];
let friendsArray = [];

// function googleLogin() {
//     const provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider)
//         .then(result => {
//             const user = result.user;
//             console.log(user.displayName);
//         })
//         .catch(console.log)

//     document.getElementById("login").style.display = "none";
//     document.getElementsByClassName("sidenav")[0].style.display = 'block';
// }

$(document).ready((event) => {
    if (localStorage.getItem("last")) {
        document.getElementById(localStorage.getItem("last")).style.display = 'block';
    } else {
        document.getElementById('Profile').style.display = 'block';
        localStorage.setItem("last", "Profile");
    }

    const app = firebase.app();
    const db = firebase.firestore();

    if (localStorage.getItem("usersId")) {
        const myUser = db.collection('users').doc(localStorage.getItem("usersId"));

        myUser.onSnapshot(doc => {
            const data = doc.data();
            document.getElementById("first-name").value = data.firstname;
            document.getElementById("last-name").value = data.lastname;
            document.getElementById("major").value = data.major;
            document.getElementById("year").value = data.year;
            if (data.courses) {
                courseArray = data.courses;
            } else {
                courseArray = [];
            }
            $('.course-item').remove();
            for (var i = 0; i < courseArray.length; i++) {
                $(".course").append("<li class='course-item'><span class='trash'><i class='fa fa-trash'></i></span>" + courseArray[i] + "</li>");
                console.log(courseArray);
            }
        });

        calculateFriends();
    }

    function calculateFriends() {
        db.collection('users').get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    if (localStorage.getItem("usersId") != doc.id) {
                        console.log(doc.id, " => ", doc.data());
                        var cour = [];
                        courseArray.forEach((e) => {
                            if (doc.data().courses != undefined) {
                                for (var i = 0; i < doc.data().courses.length; i++) {
                                    if (e == doc.data().courses[i]) {
                                        cour.push(e);
                                        console.log(cour);
                                    }
                                }
                            }
                        })
                        if (cour.length > 0) {
                            friendsArray.push({
                                friendId: doc.id,
                                friendName: doc.data().firstname,
                                coursesInCommon: cour
                            })
                        }
                    }
                });
                for (var i = 0; i < friendsArray.length; i++) {
                    $(".friends").append("<li class='friend-item'><span class='trash'><i class='fa fa-trash'></i></span>" + friendsArray[i].friendName + ", Courses in Common: " + friendsArray[i].coursesInCommon.join(", ") + "</li>");
                }
                console.log(friendsArray);
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }

    $("#loginBtn").click(() => {
        alert("Account Created!");
        var firstname = document.getElementById("first-name").value;
        var lastname = document.getElementById("last-name").value;
        var major = document.getElementById("major").value;
        var year = document.getElementById("year").value;
        console.log(firstname + " " + lastname + " " + major + " " + year);
        db.collection("users").add({
            firstname: firstname,
            lastname: lastname,
            major: major,
            year: year,
        })
            .then(function (docRef) {
                localStorage.setItem("usersId", docRef.id);
                console.log(docRef.id)
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            })
    })

    // $("ul").on("click", "li", function () {
    //     $(this).toggleClass("completed");
    // });

    $("ul").on("click", ".trash", function (event) {
        $(this).parent().fadeOut(500, function () {
            courseArray.splice(courseArray.indexOf($(this).text()), 1);
            console.log($(this).text());
            console.log(courseArray);
            $(this).remove();
            db.collection("users").doc(localStorage.getItem("usersId")).update({
                courses: courseArray
            })
                .catch(() => {
                    console.error("Error adding document: ", error);
                })
        });
        event.stopPropagation();
    });

    $("input[type='text']").keypress(function (event) {
        if (event.which === 13) {
            var todoText = $(this).val();
            $(this).val("");
            courseArray.push(todoText);
            $(".course").append("<li class='course-item'><span class='trash'><i class='fa fa-trash'></i></span>" + todoText + "</li>");

            db.collection("users").doc(localStorage.getItem("usersId")).update({
                courses: courseArray
            })
                .catch(() => {
                    console.error("Error adding document: ", error);
                })
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