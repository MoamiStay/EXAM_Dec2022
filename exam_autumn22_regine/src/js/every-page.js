import { apiUrl } from '../modules/urls.js';
// import { getProfile } from './myProfile.js';
const pfImg = document.querySelector("#pfimg");
const pfImgMob = document.querySelector("#pfimg-mob");
const user = localStorage.getItem("userName");
const myCredits = document.querySelector("#credits");
// const token = localStorage.getItem("accessToken");
const profileEndpoint = "api/v1/auction/profiles/" + user;


// Get profile Img icon and credits count for header on all pages.
export async function profileImg() {
    // getProfile(apiUrl, profileEndpoint);
    const img = localStorage.getItem("avatar");
    const credits = localStorage.getItem("credits");
    myCredits.innerHTML = credits + ` <i class="fa-solid fa-coins"></i>`;
    pfImg.innerHTML = `
    <a href="../html/profile.html"><img class="h-full w-full rounded-full" src="${img} alt="profile img"></a> 
    `
    pfImgMob.innerHTML = `
    <a href="../html/profile.html"><img class="h-full w-full rounded-full" src="${img} alt="profile img"></a> 
    `
}

profileImg()
