import { apiUrl } from '../modules/urls.js';
import { dates } from '../modules/output.js';
// import { profileImg } from '../js/every-page.js';

const user = localStorage.getItem("userName");
const token = localStorage.getItem("accessToken");
const out = document.querySelector("#output");
const myListings = document.querySelector("#my-listings");
const myBids = document.querySelector("#my-bids");

const profileEndpoint = "api/v1/auction/profiles/" + user;
const myListingsEndpoint = "api/v1/auction/profiles/" + user + "/listings";
const myBidsEndpoint = "api/v1/auction/profiles/" + user + "/bids?_listings=true";
let myListingsCollection = "";


export async function getProfile(url, endpoint, out) {
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

getProfile(apiUrl, profileEndpoint);
getProfile(apiUrl, myListingsEndpoint, myListings);
// getProfile(apiUrl, myBidsEndpoint);


export async function myListingsOut(out, listings) {
    out.innerHTML = "hello";
    for (let item of listings) {
    for (let i = 0; i < 50; i++ ) {
        console.log(listings[i]);
        dates(listings[i].endsAt)
    }
        out.innerHTML += `
 <div class="m-3 h-32 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="./html/view.html?id=${listings[i].id}">
        <img class="rounded-t-lg w-full h-3/4 object-cover" src="${listings[i].media[0]}" alt="" />
    </a>
    <div class="p-5">
        <h2 class="text-xl copytext my-1.5">${listings[i].title}</h2>
        <a href="#">
        </a>
        <p class="mb-3 font-normal copytext text-gray-700 dark:text-gray-400">Ends: ${`${day}. ${month}, ${year}`}</p>
        <a href="./html/view.html?id=${listings[i].id}"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</button></a>
    </div>
</div>
        `
    }
       };