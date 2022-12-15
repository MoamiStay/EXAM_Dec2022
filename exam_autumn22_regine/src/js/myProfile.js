import { apiUrl } from '../modules/urls.js';
import { dates } from '../modules/output.js';
import { year, day, month } from '../modules/output.js';
// import { profileImg } from '../js/every-page.js';


const user = localStorage.getItem("userName");
const token = localStorage.getItem("accessToken");
const out = document.querySelector("#output");
const myListings = document.querySelector("#my-listings");


const profileEndpoint = "api/v1/auction/profiles/" + user;
const myListingsEndpoint = "api/v1/auction/profiles/" + user + "/listings";
const myBidsEndpoint = "api/v1/auction/profiles/" + user + "/bids?_listings=true";


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
            // myCredits.innerHTML = "Available credits: " + json.credits + " <i class='fa-solid fa-coins'>";
            // username.innerHTML = json.name;
            const avatar = json.avatar;
            const credits = json.credits;
            const email = json.email;
            localStorage.setItem("avatar", avatar);
            localStorage.setItem("credits", credits);
            localStorage.setItem("email", email);

        } else {
            out.innerHTML = "Something went wrong";
        }
    } catch (error) {
        console.log(error);
    } 
};
getProfile(apiUrl, profileEndpoint);

// const getEmail = document.querySelector("#email").innerHTML = localStorage.getItem("email");
// const getUsername = document.querySelector("#username").innerHTML = localStorage.getItem("userName");
// const getCredits = document.querySelector("#my-credits").innerHTML = "Available credits: " + localStorage.getItem("credits") + " <i class='fa-solid fa-coins'>";



async function getMyListings(url, endpoint, out) {
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
            const credits = json.credits;
            localStorage.setItem("avatar", avatar);
            localStorage.setItem("credits", credits);
            myListingsOut(out, json);
        } else {
            out.innerHTML = "Did not work";
        }
    } catch (error) {
        console.log(error);
    } 
};


async function myListingsOut(out, listings) {
    out.innerHTML = "";
    for (let item of listings) {
           dates(item.endsAt)
        out.innerHTML += `
 <div class="m-3 h-32 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="../html/view.html?id=${item.id}">
        <img class="rounded-t-lg w-full h-3/4 object-cover" src="${item.media[0]}" alt="" />
    </a>
    <div class="p-5">
        <h2 class="text-xl copytext my-1.5">${item.title}</h2>
        <a href="#">
        </a>
        <p class="mb-3 font-normal copytext text-gray-700 dark:text-gray-400">Ends: ${`${day}. ${month}, ${year}`}</p>
        <a href="../html/view.html?id=${item.id}"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</button></a>
    </div>
</div>
        `
    }
       };


getMyListings(apiUrl, myListingsEndpoint, myListings);