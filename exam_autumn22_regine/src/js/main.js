import { homeLoggedIn } from "../modules/homepage.js";
import { homeLoggedOut } from "../modules/homepage.js";
import { logoutBtn } from "../modules/homepage.js";
import { getPosts } from "../modules/output.js";
import { apiUrl } from '../modules/urls.js';
import { filterPosts } from '../modules/output.js';
const output = document.querySelector("#output");
const searchBar = document.querySelector("#default-search");

const listingsEndpoint = "api/v1/auction/listings/?_seller=true&_bids=true&_active=true&sortOrder=asc";

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

searchBar.addEventListener("keyup", (event) => {
  console.log(searchBar.value);
  filterPosts(output)});


// Get profile Img icon and credits count for header on index.html.
// const img = localStorage.getItem("avatar");
// const cred = localStorage.getItem("credits");
const pfImg = document.querySelector("#pfimg").innerHTML = `<a href="./html/profile.html"><img class="h-full w-full rounded-full" src="${localStorage.getItem("avatar")} alt="profile img"></a>`
const pfImgMob = document.querySelector("#pfimg-mob").innerHTML = `<a href="./html/profile.html"><img class="h-full w-full rounded-full" src="${localStorage.getItem("avatar")} alt="profile img"></a>`
const myCredits = document.querySelector("#credits").innerHTML = `${localStorage.getItem("credits")} <i class="fa-solid fa-coins">`;

