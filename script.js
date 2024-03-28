
function validate() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
   

    if (username.value.trim() === "") {
        alert("Username cannot be empty.");
        username.focus();
        return false;
    }
    if (email.value === "") {
        alert("Email is required.");
        email.focus();
        return false;
    }
    if (password.value === "") {
        alert("Password is required.");
        password.focus();
        return false;
    }
   
    alert("you are successfully login.");
    return true;
}