import { apiUrl } from '../modules/urls.js';
const profileEndpoint = "api/v1/auction/profiles/";
const username = localStorage.getItem("username");



export async function getCredits(url, endpoint, amount, user) {
    try {
        const postData = {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(amount),
        };
        const response = await fetch(url + endpoint + user, amount);
        console.log(response);
        const json = await response.json();
        console.log(json);
        localStorage.setItem("credits", 1000)
        const credits = localStorage.getItem("credits")
    } catch (error) {
        console.log(error);
    }
};

{
    "credits": "1000"
}


        const amount = {
        credits: 1000,
    }


getCredits(apiUrl, profileEndpoint, 1000, username)