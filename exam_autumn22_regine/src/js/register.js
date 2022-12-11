import { apiUrl } from '../modules/urls.js';
const registerEndpoint = "api/v1/auction/auth/register";

const getUser = document.querySelector("#username"); 
const getEmail = document.querySelector("#email");
const getAvatar = document.querySelector("#avatar");
const getPass = document.querySelector("#password");
const confirmPass = document.querySelector("#confPass");

const userError = document.querySelector("#userError");
const emailError = document.querySelector("#emailError");
const avatarError = document.querySelector("#avatarError");
const passError = document.querySelector("#passError");
const outMsg = document.querySelector("#outMsg");

const submitButton = document.querySelector("#submitButton");


async function registerUser(url, endpoint, userData) {
    console.log(userData);
    try {
        const postData = {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url + endpoint, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        if (json.message === "Profile already exists") {
            outMsg.innerHTML = "Profile already exists";
        } else if (response.ok) {
        const userName = json.name;
        localStorage.setItem("userName", userName);
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
    avatarError.innerHTML = "";
    passError.innerHTML = "";
    outMsg.innerHTML = "";

    const username = getUser.value.trim();
    const email = getEmail.value.trim();
    const avatar = getAvatar.value.trim();
    const password = getPass.value.trim();
    const confPass = confirmPass.value.trim();
    console.log(username, email, avatar, password, confPass);

if (getUser.value.trim() !== "" && getEmail.value.trim() !== "" && getAvatar.value.trim() !== "" && getPass.value.trim() !== "") {

    validateRegUser(username, email, avatar, password, confPass);

 } else { 
    outMsg.innerHTML = "Please fill out the form";
}
});



function validateRegUser(user, userEmail, avatar, pass, secondPass) {
    const userToRegister = {};

if ( /^[a-z0-9_-]{3,16}$/.test(user)) {
    userToRegister["name"] = user;
    // console.log("valid user");
} else { userError.innerHTML = "Username must be at least 4 characters" };

if ( /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(userEmail) && (userEmail.toLowerCase().endsWith("noroff.no" || userEmail.toLowerCase().endsWith("stud.noroff.no")))) {
    userToRegister["email"] = userEmail;
    // console.log("valid Email");
} else { emailError.innerHTML = "Email must be a '@noroff.no' or '@stud.noroff.no' mail" };

if (avatar) {userToRegister["avatar"] = avatar};

if ( /^[a-z0-9_-]{8,18}$/.test(pass)) {
    if (pass === secondPass) {
        userToRegister["password"] = pass;
    } else if (pass !== secondPass) {
        passError.innerHTML = "Passwords do not match";
    }
} else { passError.innerHTML = "Password must be between 8 to 16 characters and not include special signs" };

console.log(userToRegister);
    registerUser(apiUrl, registerEndpoint, userToRegister);
};