import { apiUrl } from '../modules/urls.js';
import { profileImg } from '../modules/homepage.js'
const user = localStorage.getItem("userName");
const token = localStorage.getItem("accessToken");
const profileEndpoint = "api/v1/auction/profiles/" + user;
const out = document.querySelector("#output");


console.log(apiUrl + profileEndpoint);


async function getProfile(url, endpoint) {
    try {
        const postData = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url + endpoint);
        console.log(response);
        const json = await response.json();
        console.log(json);
        if (response.ok) {
            // posts(json)
        } else {
            out.innerHTML = "Did not work";
        }
    } catch (error) {
        console.log(error);
    } 
};
getProfile(apiUrl, profileEndpoint)


// profileImg(listing.avatar)