import { apiUrl } from '../modules/urls.js';
// import { profileImg } from '../js/every-page.js';
const user = localStorage.getItem("userName");
const token = localStorage.getItem("accessToken");
const profileEndpoint = "api/v1/auction/profiles/" + user;
const out = document.querySelector("#output");


export async function getProfile(url, endpoint) {
    try {
        const postData = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url + endpoint, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);
        if (response.ok) {
            const avatar = json.avatar;
            localStorage.setItem("avatar", avatar)
        } else {
            out.innerHTML = "Did not work";
        }
    } catch (error) {
        console.log(error);
    } 
};

getProfile(apiUrl, profileEndpoint);