const loginBtn = document.querySelector("#loginBtn");
export const logoutBtn = document.querySelector("#logoutBtn");
const loggedOut = document.querySelector("#loggedOutHome");
const loggedIn = document.querySelector("#loggedInHome");
const credits = document.querySelector("#credits");
const pfimg = document.querySelector("#pfimg");
const createNew = document.querySelector("#create-new");


export function homeLoggedIn() {
    if (localStorage.getItem("accessToken")) {
        console.log("Signed in");
        loginBtn.classList.add("hidden");
        logoutBtn.classList.remove("hidden");
        loggedIn.classList.remove("hidden");
        loggedOut.classList.add("hidden");
        pfimg.classList.remove("hidden");
        credits.classList.remove("hidden");
        createNew.classList.remove("hidden");
    } else {
        console.log("Not signed in");
    }
}

export function homeLoggedOut() {
    // window.location.href = "../../index.html";
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("avatar");
    if (localStorage.getItem("accessToken") === null) {
        console.log("You are logged out");
        loginBtn.classList.remove("hidden");
        logoutBtn.classList.add("hidden");
        loggedIn.classList.add("hidden");
        loggedOut.classList.remove("hidden");
        pfimg.classList.add("hidden");
        credits.classList.add("hidden");
        createNew.classList.add("hidden");
    } else {
        console.log("You are still signed in");
    }
}