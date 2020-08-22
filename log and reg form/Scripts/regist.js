"use strict"
class Person {
    constructor(name, surname, age, email, password) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email; 
        this.password = password;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("register").addEventListener("click", function (e) {
        e.preventDefault();
        let user_name = document.getElementById("name_inp").value;
        let user_surname = document.getElementById("surname").value;
        let user_age = document.getElementById("age").value; 
        let user_email = document.getElementById("email_inp").value;
        let user_password = document.getElementById("password_inp").value; 
        
        let person = new Person(user_name,user_surname,user_age,user_email,user_password)
        alert("You registred!");

        let user_data = JSON.stringify(person);
        if ("database" in localStorage) {
           let data = JSON.parse(localStorage["database"]);
           if ("length" in data) {
              data.push(person);
              localStorage["database"] = JSON.stringify(data);
           } 
           else{
                let arr_people = [];
                arr_people.push(data);
                arr_people.push(person);
                localStorage["database"] = JSON.stringify(arr_people);
           }
        }
        else{
            localStorage["database"] = user_data
        }
    }); 
});