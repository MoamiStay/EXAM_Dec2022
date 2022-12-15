import { apiUrl } from '../modules/urls.js';
const createEndpoint = "api/v1/auction/listings";
const token = localStorage.getItem("accessToken");


const title = document.querySelector("#listing-title");
const media = document.querySelector("#listing-media");
const description = document.querySelector("#listing-description");
const deadline = document.querySelector("#listing-deadline");
const tags = document.querySelector("#listing-tags");
const postBtn = document.querySelector("#post-listing");


export async function createPost(url, endpoint, createdListing) {
    console.log(createdListing);
    try {
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(createdListing),
        };
        const response = await fetch(url + endpoint, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        if (response.ok) {
            console.log("you made a listing");
        } else {
        // bidError.innerHTML = "You can only place a bid if it is higher than the current bid";
        }
    } catch (error) {
        console.log(error);
    } 
};


postBtn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button clicked");

    const listingTitle = title.value.trim();
    const listingMedia = media.value.split(" ");
    const listingDesc = description.value.trim();
    const listingDate = deadline.value.trim();
    const listingTags = tags.value.split(" ");

    const newListing = {
        title: listingTitle,
        description: listingDesc,
        tags: listingTags,
        media: listingMedia,
        endsAt: listingDate
    }

    createPost(apiUrl, createEndpoint, newListing);
})