let user = JSON.parse(sessionStorage["user"])
if (user == undefined && user == null) {
    document.location.href = "login.html"
}
document.getElementById("welcome").innerHTML = "Welcome, dear " + user.email;
document.getElementById("user_info").innerHTML = "Name: " + user.name + "<br>";
document.getElementById("user_info").innerHTML += "Surname: " + user.age  + "<br>";
document.getElementById("user_info").innerHTML += "Age: " + user.surname + "<br>";