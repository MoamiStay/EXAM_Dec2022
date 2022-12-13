import { homeLoggedIn } from "../modules/homepage.js";
import { homeLoggedOut } from "../modules/homepage.js";
import { logoutBtn } from "../modules/homepage.js";
import { getPosts } from "../modules/output.js";
import { apiUrl } from '../modules/urls.js';
import { getProfile } from './getProfile.js';
const output = document.querySelector("#output");


const listingsEndpoint = "api/v1/auction/listings/?_seller=true&_bids=true&_active=true&sortOrder=desc";

if (localStorage.getItem("accessToken") === null) {
    homeLoggedOut()
}

// Change homepage according to the user being logged in
homeLoggedIn();

// chnage homepage according to the user being logged out
logoutBtn.addEventListener("click", (event) => {
    homeLoggedOut()
});

// Show list of listings to browse
getPosts(apiUrl, listingsEndpoint, output);



// Get profile Img icon and credits count for header on index.html.
const pfImg = document.querySelector("#pfimg");
const pfImgMob = document.querySelector("#pfimg-mob");
const user = localStorage.getItem("userName");
const myCredits = document.querySelector("#credits");
const profileEndpoint = "api/v1/auction/profiles/" + user;

export async function profileImg() {
    getProfile(apiUrl, profileEndpoint);
    const img = localStorage.getItem("avatar");
    const credits = localStorage.getItem("credits");
    myCredits.innerHTML = credits + ` <i class="fa-solid fa-coins"></i>`;
    pfImg.innerHTML = `
    <a href="./html/profile.html"><img class="h-full w-full rounded-full" src="${img} alt="profile img"></a> 
    `
    pfImgMob.innerHTML = `
    <a href="./html/profile.html"><img class="h-full w-full rounded-full" src="${img} alt="profile img"></a> 
    `
}

profileImg()