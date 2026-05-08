/*
    Name: Annie Lam'
    Date created:
    Date last modified:
    Purpose: Homework 4 JS Form
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};

//first name validate js code
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

//middle initial validate js code
function validateMini() {
    mini = document.getElementById("mini").value;
    var namePattern = /^[A-Z]+$/;
    //checks if middle initial is uppercase
    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    //checks that middle initial is 1 character
    if (mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = "Middle initial cannot have more than 1 character";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML ="";
        return true;
    }
}

//last name validate js code
function validateLname() {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if last name is empty
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty";
        return false;
    } else if (fname != "") {
    if (!lname.match(namePattern)) { //checks if last name matches pattern
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only";
        return false;
    }else if (lname.length < 2){ //checks if name is at least 1 character
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than two characters";
        return false;
    } else if (lname.length > 30){ //checks if name is more than 30 characters
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML ="";
        return true;
    }
}
}

    //validate dob js code
function validateDob() {
    dob= document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date()-120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date of Birth cannot be in the future."
        dob.value="";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date of Birth cannot be more than 120 years ago."
        dob.value="";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}
//validate ssn js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

    //regex for SSN pattern
    const ssnR  =/^[0-9]{3}-[0-9]{2}-[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Invalid SSN format.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}
//address 1 validation js code
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);
    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Please enter a valid address.";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

//city validate js code
function validateCity() {
    city = document.getElementById("city").value.trim();
    
    if (!city){
        document.getElementById("city-error").innerHTML = "City cannot be blank";
        return false;
    } else{
    document.getElementById("city-error").innerHTML = "";
    return true;   
    }
}

//zip code validation js code
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "") //remove non-digit characters

    if (!zip) {
        document.getElementById("zip-error").innerHTML = "Please enter a zip code.";
        return false;
    }
    if (zip.length > 5) {
        zip = zip.slice(0, 5); //limit to 5 digits

    }
        zipInput.value = zip;
        document.getElementById("zip-error").innerHTML = "";
        return true;
}

//email validation js code
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex for pattern for email

    if (email=="") {
        document.getElementById("email-error").innerHTML = "Email cannot be empty.";
        return false;
    }
    else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

//phone number validation js code
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, ""); //remove non-digit characters

    if (phone.length !== 0) {
        document.getElementById("phone-error").innerHTML = "Please enter a valid 10-digit phone number.";
        return false;
    }
    
    const formattedPhone = phone.slice (0,3)+ "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

//username validation js code
function validateUname() {
    uname = document.getElementById("uname").value;

    // converts username to lowercase
    uname = uname.toLowerCase();
    //display username in lowercase
    document.getElementById("uname").value = uname;

   if (uname.length == 0) {
        document.getElementById("uname-error").innerHTML = "Please enter a username.";
        return false;
   }

   //checks that username does not start with a number))
   if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error").innerHTML = "Username cannot start with a number.";
        return false;
    
   }

   //checks username consists of only letters, numbers, and underscores
   let regex = /^[a-zA-Z0-9_-]+$/;
   if (!regex.test(uname)) {
        document.getElementById("uname-error").innerHTML = "Username can only contain letters, numbers, underscores, and dashes.";
        return false;
        //checks username does not have more than 30 characters
   } else if (uname.length < 5) {
        document.getElementById("uname-error").innerHTML = "Username must be at least 5 characters.";
        return false;
   }
   else if (uname.length > 30) {
        document.getElementById("uname-error").innerHTML = "Username cannot be more than 30 characters.";
        return false;
   } else { //if all of the above checks pass then username is valid
        document.getElementById("uname-error").innerHTML = "";
        return true;
   }
}

//passsword validation js code
function validatePassword() {
    const pword = document.getElementById("pword").value;
    const uname = document.getElementById("uname").value;

    //sets up and initializes array
    const errorMessage = [];

    //checks for lowercase letters
    if (!pword.match(/[a-z]/)) {
        errorMessage.push("enter at least one lowercase letter");
    }
   
    //checks for uppercase letters
    if (!pword.match(/[A-Z]/)) {
        errorMessage.push("enter at least one uppercase letter");
    }

    //checks for numbers
    if (!pword.match(/[0-9]/)) {
        errorMessage.push("enter at least one number");
    }

    //checks for special characters
    if (!pword.match(/[!@#$%^&*(),.?":{}|<>]/)) {
        errorMessage.push("enter at least one special character");
    }

    //checks username not in password
    if (pword == uname || pword.includes(uname)) {
        errorMessage.push("password cannot contain username");
    }

    //displays error messages if any errors
    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");

}

//confirm password validation js code
function confirmPassword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("confirm").value;

    if (pword1 != pword2) {
        document.getElementById("confirm-error").innerHTML = "Passwords do not match.";
        return false;
    } else {
        document.getElementById("confirm-error").innerHTML = "Passwords match.";
        return true;
    }
}    

//re-display user input back to user (review button)
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'> Your Information:</th>";
    for (i=0; i < formcontent.length; i ++) {
        if (formcontent.elements[i].value != "") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "td class='outputdata'>&#x2713;</td></tr>";
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = "td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}   

//remove user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//shows alert box when necessary js code
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function (){
        alertBox.style.display = "none";
    }
}

//validate everything on form
function validateEverything() {
    let valid = true;
    
    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }if (!validateEmail()) {
        valid = false;
    }if (!validateZip()) {
        valid = false;
    }
    if (!validatePassword()) {
        valid = false;
    }
    if (!confirmPassword()) {
        valid = false;
    }

    if (valid) {
        document.getElementById("submit").disabled = false;
    } else {
        showAlert();
    }
}

// when the cookies expires
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}
// retrives the value of a cookie by its name
function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    {id:"fname", cookieName: "firstName"},
    {id:"mini", cookieName: "middleInitial"},
    {id:"lname", cookieName: "lastName"},
    {id:"dob", cookieName: "dob"},
    {id:"ssn", cookieName: "ssn"},
    {id:"address1", cookieName: "address1"},
    {id:"city", cookieName: "city"},
    {id:"zip", cookieName: "zipCode"},
    {id:"email", cookieName: "email"},
    {id:"phone", cookieName: "phone"},
    {id:"username", cookieName: "userName"},
];

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // Prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // Set a cookie when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

//greet the user with their name and message if cookie is set
var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}
// toggles cookie storage based on the "Remember Me" checkbox state
document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // If "Remember Me" is unchecked, delete cookies
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } else {
        // If "Remember Me" is checked or rechecked, save cookies
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});
//removes all stored cookies by setting their expiration date in the past
function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}

//ensures cookies are deleted if "Rememmber Me" is unchecked upon page load
document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});