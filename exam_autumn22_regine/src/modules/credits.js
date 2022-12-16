import { apiUrl } from '../modules/urls.js';
const profileEndpoint = "api/v1/auction/profiles/";
const username = localStorage.getItem("username");



export async function getCredits(user) {
    try {
        const postData = {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    "credits": 1000
                }
            ),
        };
        const response = await fetch("https://nf-api.onrender.com/api/v1/auction/profiles/" + user);
        console.log(response);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
};

        const amount = {
        credits: 1000,
    }

}

getCredits()