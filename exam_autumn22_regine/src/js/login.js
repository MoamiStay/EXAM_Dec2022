import { apiUrl } from '../modules/urls.js';
import { homeLoggedIn } from "../modules/homepage.js";

const link = apiUrl + "api/v1/auction/auth/login";


const getEmail = document.querySelector("#exampleFormControlInput1");
const getPassword = document.querySelector("#exampleFormControlInput2");
const loginBtn = document.querySelector("#loginBtn");
const header = document.querySelector("header");
const loginForm = document.querySelector("section#login");

async function loginUser(url, userData) {
    try {
        console.log(url, userData);
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);
        // console.log(json.accessToken);
        const userName = json.name;
        const accessToken = json.accessToken;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userName", userName);
        if (response.ok) {
            homeLoggedIn()
        // window.location.href = "../../index.html";
        } else {
            // loginContent.innerHTML = "Password or Email is invalid";
        }
    } catch (error) {
        console.log(error);
    } 
};


loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // loginContent.innerHTML = '<img src="#" alt"Loading...">';

    const email = getEmail.value.trim();
    const password = getPassword.value.trim();

    const userToLogin = {
        email: email,
        password: password,
    }
    loginUser(link, userToLogin);
});

