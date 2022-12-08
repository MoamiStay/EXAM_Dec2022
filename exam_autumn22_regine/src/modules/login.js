import { apiUrl } from './urls.js';

export async function login(email, password, url, method) {
  const response = await fetch(`${apiUrl + url}`, {
    method: method,
    body: JSON.stringify({ email, password }),
    headers: headers('application/json'), // Needs to get authentication key
  });

  if (response.ok) {
    const profile = await response.json();
    localStorage.setItem('token', profile.accessToken);
    delete profile.accessToken;
    localStorage.setItem('profile', profile);
    return profile;
  }

  throw new Error(response.statusText);
}


// Headers
// export const headers = (contentType) => {
//   const token = storage.load('token');
//   const headers = {};
//
//   if (contentType) {
//     headers['Content-Type'] = contentType;
//   }

//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }

//   return headers;
// };



/////////////////////////// EXAMPLE ////////////////////////////

const getEmail = document.querySelector("input#validationDefaultEmail");
const getPassword = document.querySelector("input#validationDefault01");
const loginBtn = document.querySelector("button#submitBtn");
const logoutBtn = document.querySelector("button#logoutBtn");
const loginContent = document.querySelector("#login-container");
const header = document.querySelector("header");
const loginForm = document.querySelector("section#login");
const API_BASE_URL = "https://nf-api.onrender.com";
const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

async function loginUser(url, userData) {
    try {
        // console.log(url, userData);
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
        window.location.href = "../home-page.html";
        } else {
            loginContent.innerHTML = "Password or Email is invalid";
        }
    } catch (error) {
        console.log(error);
    } 
};


loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    loginContent.innerHTML = '<img src="../images/Spinner-1s-79px.gif">';

    const email = getEmail.value.trim();
    const password = getPassword.value.trim();

    const userToLogin = {
        email: email,
        password: password,
    }
    loginUser(loginUrl, userToLogin);
});

