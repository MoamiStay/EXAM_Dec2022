import { apiUrl } from '../modules/urls.js';
import { getProfile } from './getProfile.js';
const pfImg = document.querySelector("#pfimg");
const pfImgMob = document.querySelector("#pfimg-mob");
const user = localStorage.getItem("userName");
const token = localStorage.getItem("accessToken");
const profileEndpoint = "api/v1/auction/profiles/" + user;


export async function profileImg() {
    getProfile(apiUrl, profileEndpoint);
    const img = localStorage.getItem("avatar");
    pfImg.innerHTML = `
    <a href="../html/profile.html"><img class="h-full w-full rounded-full" src="${img} alt="profile img"></a> 
    `
    pfImgMob.innerHTML = `
    <a href="../html/profile.html"><img class="h-full w-full rounded-full" src="${img} alt="profile img"></a> 
    `
}
profileImg()
