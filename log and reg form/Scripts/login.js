document.addEventListener("DOMContentLoaded" , function () {
    document.getElementById("btn-login").addEventListener("click", function (e) {
        e.preventDefault();
        let log = document.getElementById("emailInput").value;
        let passw = document.getElementById("passwInput").value;

        let foundUser = false;
        let all_data = JSON.parse(localStorage["database"])
        for (let user of all_data) {
            if (log == user['email'] && passw == user['password']) {
                foundUser = true;
                let user_data = JSON.stringify(user);
                sessionStorage["user"] = user_data;
            }
        };
        if (foundUser) {
            document.location.href = "web.html";
        }
        else {
            alert("Your input is wrong! Try again.");
        }
    })
})
