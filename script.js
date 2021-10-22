function validateForm() {
    var username = document.forms["contactForm"]["username"].value;
    var firstname = document.forms["contactForm"]["firstname"].value;
    var lastname = document.forms["contactForm"]["lastname"].value;
    var email = document.forms["contactForm"]["email"].value;
    var password = document.forms["contactForm"]["password"].value;
    var cpassword = document.forms["contactForm"]["password-confirm"].value;
    
    if (username == null || username == "") {
        alert("Please insert a username");
        return false;
    }
    
    else if (firstname == null || firstname == "") {
        alert("First Name must be filled out");
        return false;
    } else if (lastname == null || lastname == "") {
        alert("Last Name must be filled out");
        return false;
}else if (email == null || email == "") {
    alert("Email must be filled out");
    return false;

}
else if (password == null || password == "") {
    alert("Password must be filled out");
    return false;

}
else if (password !== cpassword ) {
    alert("The password doesn't match");
    return false;

}
else return true;
}
