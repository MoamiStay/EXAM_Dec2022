import { apiUrl } from '../modules/urls.js';
import { dates } from '../modules/output.js';
import { year, day, month } from '../modules/output.js';

let params = new URLSearchParams(document.location.search);
let id = params.get("id");

const listingEndpoint = "api/v1/auction/listings/" + id + "?_seller=true&_bids=true";
const out = document.querySelector("#output");
const title = document.querySelector("title");
const bidError = document.querySelector("#bid-error");


export async function getPost(url, endpoint) {
    try {
        const postData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(url + endpoint, postData);
        // console.log(response);
        const json = await response.json();
        // console.log(json);
        if (response.ok) {
            title.innerHTML = json.title;
            post(json);
        } else {
        // loginContent.innerHTML = "Password or Email is invalid";
        }
    } catch (error) {
        console.log(error);
    } 
};

getPost(apiUrl, listingEndpoint)



function post(data) {
    dates(data.endsAt);

    let highBid = 0;
    for (let bid of data.bids) { 
        if (bid.amount > highBid) {highBid = bid.amount} else { continue }
    }
    out.innerHTML = `
     <div class="grid md:grid-cols-2 m-3 h-32 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

        <img class="rounded-t-lg w-full h-2/4 object-cover" src="${data.media}" alt="" />

        <div class="p-6">
        <h1 class="headline-text text-xl">${data.title}</h1>
        <h2 class="copytext text-xl">Description</h2>
        <p>${data.description}</p>
        <div>${data.tags}</div>
        </div>
    
    </div>
 
    <div class="p-5">
        <h3 class="text-xl copytext my-1.5">Ends: ${`${day}. ${month}, ${year}`}</h3>
        <h5 class="mb-2 text-2xl copytext font-bold tracking-tight text-gray-900 dark:text-white">Highest bid: ${highBid + ` <i class="fa-solid fa-coins"></i>`}</h5>
        <p>${data._count.bids} people has bid on this item</p>

    </div>
    `;
};




const makeBid = document.querySelector("#make-bid");
const bidAmount = document.querySelector("#bid-amount");
const makeBidEndpoint = "api/v1/auction/listings/" + id + "/bids";
const token = localStorage.getItem("accessToken");


export async function bidOnListing(url, endpoint, bid) {
    console.log(bid);
    try {
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(bid),
        };
        const response = await fetch(url + endpoint, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        if (response.ok) {
            console.log("it went well");
        } else {
        bidError.innerHTML = "You can only place a bid if it is higher than the current bid";
        }
    } catch (error) {
        console.log(error);
    } 
};


makeBid.addEventListener("click", (event) => {
    console.log("button clicked");
    const bid = Number(bidAmount.value.trim())

    const myBid = {
        amount: bid
    }
    bidOnListing(apiUrl, makeBidEndpoint, myBid)
})
