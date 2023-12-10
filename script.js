//selecting all the elements that we need
const nextButtonFormFirst = document.querySelector(".nextButtonFormFirst");
const nextButtonFormSecond = document.querySelector(".nextButtonFormSecond");
const nextButtonFormThird = document.querySelector(".nextButtonFormThird");
const prevButtonFormSecond = document.querySelector(".prevButtonFormSecond");
const prevButtonFormThird = document.querySelector(".prevButtonFormThird");
const prevButtonFormFourth = document.querySelector(".prevButtonFormFourth");
const persInfo = document.querySelector("#persInfo");
const contInfo = document.querySelector("#contInfo");
const createAccInfo = document.querySelector("#createAccInfo");
const formFirstDetails = document.querySelector("#form-first-details");
const formSecondDetails = document.querySelector("#form-second-details");
const formThirdDetails = document.querySelector("#form-third-details");
const formStepRecorder = document.querySelector("#form-step-recorder");

nextButtonFormFirst.disabled = true;
nextButtonFormSecond.disabled = true;
nextButtonFormThird.disabled = true;



// the code below is for the validations for First Name input


document.querySelector("#firstName").addEventListener("keyup", () => {


    let firstName = document.querySelector("#firstName").value;
    let firstNameError = document.querySelector("#firstName-Error");


    if (firstName.length == 0) {
        firstNameError.innerHTML = "first name is required";
        nextButtonFormFirst.disabled = true;
    }
    else if (firstName.length<3) {
        firstNameError.innerHTML = "first name is too short";
        nextButtonFormFirst.disabled = true;
    }
    else {
        document.querySelector("#firstName-Error").innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/40C057/instagram-check-mark.png" alt="instagram-check-mark"/>';
        // nextButtonFormFirst.disabled = false;
    }
    

})

// the code below is for the validations for Last Name input


document.querySelector("#lastName").addEventListener("keyup", () => {


    let lastName = document.querySelector("#lastName").value;
    let lastNameError = document.querySelector("#lastName-Error");


    if (lastName.length == 0) {
        lastNameError.innerHTML = "last name is required";
        nextButtonFormFirst.disabled = true;
    }
    else if (lastName.length<3) {
        lastNameError.innerHTML = "last name is too short";4
        nextButtonFormFirst.disabled = true;
    }
    else {
        lastNameError.innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/40C057/instagram-check-mark.png" alt="instagram-check-mark"/>';
        // nextButtonFormFirst.disabled = false;
    }
    

})

// the code below is for the validations for Age input


document.querySelector("#age").addEventListener("keyup", () => {


    let age = document.querySelector("#age").value;
    let ageError = document.querySelector("#age-Error");


    if (age.length == 0) {
        ageError.innerHTML = "age is required";
        nextButtonFormFirst.disabled = true;
    }
    else if (age <= 16) {
        ageError.innerHTML = "age must be greater than 16";
        nextButtonFormFirst.disabled = true;
    }
    else if (age > 50) {
        ageError.innerHTML = "age can not be greater than 50";
        nextButtonFormFirst.disabled = true;
    }
    else {
        ageError.innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/40C057/instagram-check-mark.png" alt="instagram-check-mark"/>';
        nextButtonFormFirst.disabled = false;
    }
    

})

// the code below is for the validations for Email input


document.querySelector("#email").addEventListener("keyup", () => {


    let email = document.querySelector("#email").value;
    let emailError = document.querySelector("#email-Error");


    if (email.length == 0) {
        emailError.innerHTML = "email is required";
        nextButtonFormSecond.disabled = true;
    }
    else if(!email.match(/[A-Za-z][\._\-][0-9]+[@]+[A-Za-z]+[\.][a-z]$/)) {
        emailError.innerHTML = "email is invalid";
        // nextButtonFormSecond.disabled = true;
    }
    else {
        emailError.innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/40C057/instagram-check-mark.png" alt="instagram-check-mark"/>';
        // nextButtonFormSecond.disabled = false;
    }
    
    

})

// the code below is for the validations for Phone Number input


document.querySelector("#phoneNumber").addEventListener("keyup", () => {


    let phone = document.querySelector("#phoneNumber").value;
    let phoneError = document.querySelector("#phone-Error");


    if (phone.length == 0) {
        phoneError.innerHTML = "phone number is required";
        nextButtonFormSecond.disabled = true;
    }
    else if (phone.match(/[A-Za-z]$/)) {
        phoneError.innerHTML = "phone number should be in numbers";
        nextButtonFormSecond.disabled = true;
    }
    else if (phone.length < 10 || phone.length > 10) {
        phoneError.innerHTML = "phone number must be 10 digits";
        nextButtonFormSecond.disabled = true;
    }
    else {
        phoneError.innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/40C057/instagram-check-mark.png" alt="instagram-check-mark"/>';
        // nextButtonFormSecond.disabled = false;
    }
   
    
})

// the code below is for the validations for the country input


document.querySelector("#country").addEventListener("keyup", () => {


    let country = document.querySelector("#country").value;
    let countryError = document.querySelector("#country-Error");


    if (country.length == 0) {
        countryError.innerHTML = "country name is required";
        nextButtonFormSecond.disabled = true;
    }
    else if (!country.match(/[A-Z]$/)) {
        countryError.innerHTML = "country name must be capital";
        nextButtonFormSecond.disabled = true;
    }
    else if (country.length < 3) {
        countryError.innerHTML = "country name is too short";
        nextButtonFormSecond.disabled = true;
    }
    else {
        countryError.innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/40C057/instagram-check-mark.png" alt="instagram-check-mark"/>';
        nextButtonFormSecond.disabled = false;
    }
   
    
})

// the code below is for the validations for the uesrname input


document.querySelector("#username").addEventListener("keyup", () => {


    let username = document.querySelector("#username").value;
    let usernameError = document.querySelector("#username-Error");


    if (username.length == 0) {
        usernameError.innerHTML = "username is required";
        nextButtonFormThird.disabled = true;
    }
    else if (username.length < 5) {
        usernameError.innerHTML = "username must be atleast 5 characters";
        nextButtonFormThird.disabled = true;
    }
    else {
        usernameError.innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/40C057/instagram-check-mark.png" alt="instagram-check-mark"/>';
        // nextButtonFormThird.disabled = false;
    }
   
    
})



// the code below is for the validations for the password input


document.querySelector("#password").addEventListener("keyup", () => {


    let password = document.querySelector("#password").value;
    let passwordError = document.querySelector("#password-Error");


    if (password.length == 0) {
        passwordError.innerHTML = "password is required";
        nextButtonFormThird.disabled = true;
    }
    else if (password.length < 8) {
        passwordError.innerHTML = "password must be atleast 8 characters";
        nextButtonFormThird.disabled = true;
    }
    else if (!password.match(/[A-Za-z0-9!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]$/)) {
        passwordError.innerHTML = "password must contain , alphabets, char & num";
        nextButtonFormThird.disabled = true;
    }
    else if (password.length > 15) {
        passwordError.innerHTML = "password must be less than 15 characters";
        nextButtonFormThird.disabled = true;
    }
    else {
        passwordError.innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/40C057/instagram-check-mark.png" alt="instagram-check-mark"/>';
        // nextButtonFormFirst.disabled = false;
    }
   
    
})

// the code below is for the validations for the confirmPassword input


document.querySelector("#confirmPassword").addEventListener("keyup", () => {

    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;
    let confirmPasswordError = document.querySelector("#confirmPassword-Error");


    if (confirmPassword.length == 0) {
        confirmPasswordError.innerHTML = "password is required";
        nextButtonFormThird.disabled = true;
    }
    else if (confirmPassword != password) {
        confirmPasswordError.innerHTML = "password does not match";
        nextButtonFormThird.disabled = true;
    }
    else {
        confirmPasswordError.innerHTML = '<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/40C057/instagram-check-mark.png" alt="instagram-check-mark"/>';
        nextButtonFormThird.disabled = false;
    }
   
    
})



//code for the first page next button ie. to go to 2nd page from 1st
nextButtonFormFirst.addEventListener("click", () => {
    formFirstDetails.style.display = "none";
    persInfo.style.border = "none";
    
    formSecondDetails.style.display = "flex";
    contInfo.style.borderBottom = "2.5px solid #020202";
    })
    
    
    //code for the second page next button ie. to go to 3rd page from 2nd
    nextButtonFormSecond.addEventListener("click", () => {
    formSecondDetails.style.display = "none";
    contInfo.style.border = "none";
    
    formThirdDetails.style.display = "flex";
    createAccInfo.style.borderBottom = "2.5px solid #020202";
    })
    
    
    //code for the second page prvious button ie. to go to 1st page from 2nd
    prevButtonFormSecond.addEventListener("click", () => {
    formSecondDetails.style.display = "none";
    contInfo.style.border = "none";
    
    formFirstDetails.style.display = "flex";
    persInfo.style.borderBottom = "2.5px solid #020202";
    })
    
    
    //code for the third page prvious button ie. to go to 2nd page from 3rd
    prevButtonFormThird.addEventListener("click", () => {
    formThirdDetails.style.display = "none";
    createAccInfo.style.border = "none";
    
    formSecondDetails.style.display = "flex";
    contInfo.style.borderBottom = "2.5px solid #020202";
    })
    

//code for the button that leads to confirmation page from 3rd page of the form
// nextButtonFormThird.addEventListener("click", () => {
//     formThirdDetails.style.display = "none";
//     formStepRecorder.style.display = "none";
//     document.querySelector("#confirmationPage").style.display = "block";
    

//     let firstName = document.querySelector("#firstName").value;
//     let firstNameOutput = document.querySelector("#firstName-Output");
//     firstNameOutput.innerHTML = firstName;

    
// })

//code for the third page next button ie. to go to 4th page from 3rd
nextButtonFormThird.addEventListener("click", () => {
    formThirdDetails.style.display = "none";
    formStepRecorder.style.display = "none";
    
    
    

    let firstName = document.querySelector("#firstName").value;
    let firstNameOutput = document.querySelector("#firstName-Output");
    firstNameOutput.innerHTML = firstName;


    let lastName = document.querySelector("#lastName").value;
    let lastNameOutput = document.querySelector("#lastName-Output");
    lastNameOutput.innerHTML = lastName;


    let birthDate = document.querySelector("#birthDate").value;
    let birthDateOutput = document.querySelector("#birthDate-Output");
    birthDateOutput.innerHTML = birthDate;


    let age = document.querySelector("#age").value;
    let ageOutput = document.querySelector("#age-Output");
    ageOutput.innerHTML = age;


    let gender = document.querySelector("#gender").value;
    let genderOutput = document.querySelector("#gender-Output");
    genderOutput.innerHTML = gender;


    let email = document.querySelector("#email").value;
    let emailOutput = document.querySelector("#email-Output");
    emailOutput.innerHTML = email;


    let phoneNumber = document.querySelector("#phoneNumber").value;
    let phoneNumberOutput = document.querySelector("#phoneNumber-Output");
    phoneNumberOutput.innerHTML = phoneNumber;


    let address = document.querySelector("#address").value;
    let addressOutput = document.querySelector("#address-Output");
    addressOutput.innerHTML = address;


    let city = document.querySelector("#city").value;
    let cityOutput = document.querySelector("#city-Output");
    cityOutput.innerHTML = city;


    let country = document.querySelector("#country").value;
    let countryOutput = document.querySelector("#country-Output");
    countryOutput.innerHTML = country;


    let username = document.querySelector("#username").value;
    let userNameOutput = document.querySelector("#username-Output");
    userNameOutput.innerHTML = username;


    let password = document.querySelector("#password").value;
    let passwordOutput = document.querySelector("#password-Output");
    passwordOutput.innerHTML = password;


    let confirmPassword = document.querySelector("#confirmPassword").value;
    let confirmPasswordOutput = document.querySelector("#confirmPassword-Output");
    confirmPasswordOutput.innerHTML = confirmPassword;



    document.querySelector("#confirmationPage").style.display = "block";
    // document.querySelector(".outputGroup").style.display = "flex";
    // document.querySelector(".outputGroup").style.justify = "space-between";


})

prevButtonFormFourth.addEventListener("click", () => {
    document.querySelector("#confirmationPage").style.display = "none";
    formStepRecorder.style.display = "flex";
    document.querySelector("#form-third-details").style.display = "flex";

})


document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
})



