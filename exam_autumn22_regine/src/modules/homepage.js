const loginBtn = document.querySelector("#loginBtn");
export const logoutBtn = document.querySelector("#logoutBtn");
const loggedOut = document.querySelector("#loggedOutHome");
const loggedIn = document.querySelector("#loggedInHome")


export function homeLoggedIn() {
    if (localStorage.getItem("accessToken")) {
        console.log("hello from homepage");
        loginBtn.classList.add("hidden");
        logoutBtn.classList.remove("hidden");
        loggedIn.classList.remove("hidden");
        loggedOut.classList.add("hidden");
    } else {
        console.log("Not signed in");
    }
}

export function homeLoggedOut() {
    // window.location.href = "../../index.html";
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    if (localStorage.getItem("accessToken") === null) {
        console.log("You are logged out");
        loginBtn.classList.remove("hidden");
        logoutBtn.classList.add("hidden");
        loggedIn.classList.add("hidden");
        loggedOut.classList.remove("hidden");
    } else {
        console.log("You are still signed in");
    }
}