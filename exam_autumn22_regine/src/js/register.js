import { apiUrl } from './urls.js';

const registerUrl = `${apiUrl}/api/v1/auction/auth/register`;


async function registerUser(url, userData) {
    // console.log(userData);
    try {
        const postData = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        if (json.message === "Profile already exists") {
            outMsg.innerHTML = "Profile already exists";
        } else if (response.ok) {
            outMsg.innerHTML = "Registration successful";
        } else {
            outMsg.innerHTML = "Registration unsuccessful";
        }
    } catch (error) {
        console.log(error);
    }
};


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    userError.innerHTML = "";
    emailError.innerHTML = "";
    passError.innerHTML = "";
    outMsg.innerHTML = "";

    const username = getUser.value.trim();
    const email = getEmail.value.trim();
    const password = getPass.value.trim();
    const confPass = confirmPass.value.trim();
    console.log(username, email, password, confPass);

if (getUser.value.trim() !== "" && getEmail.value.trim() !== "" && getPass.value.trim() !== "") {

    validateRegUser(username, email, password, confPass);

 } else { 
    outMsg.innerHTML = "Please fill out the form";
}
});


function validateRegUser(user, userEmail, pass, secondPass) {
    const userToRegister = {};

if ( /^[a-z0-9_-]{3,16}$/.test(user)) {
    userToRegister["name"] = user;
    console.log("valid user");
} else { userError.innerHTML = "Username must be at least 4 characters" };

if ( /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(userEmail) && (userEmail.toLowerCase().endsWith("noroff.no" || userEmail.toLowerCase().endsWith("stud.noroff.no")))) {
    userToRegister["email"] = userEmail;
    // console.log("valid Email");
} else { emailError.innerHTML = "Email must be a '@noroff.no' or '@stud.noroff.no' mail" };

if ( /^[a-z0-9_-]{8,18}$/.test(pass)) {
    if (pass === secondPass) {
        userToRegister["password"] = pass;
    } else if (pass !== secondPass) {
        passError.innerHTML = "Passwords do not match";
    }
} else { passError.innerHTML = "Password must be between 8 to 16 characters and not include special signs" };

console.log(userToRegister);
    registerUser(registerUrl, userToRegister);
};


