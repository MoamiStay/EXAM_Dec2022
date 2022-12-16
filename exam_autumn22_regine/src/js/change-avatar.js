const currentPf = document.querySelector("#current-avatar");
const editAvatar = document.querySelector("#edit-avatar");
const avatarLink = document.querySelector("#new-avatar");
const saveAvatar = document.querySelector("#save-avatar");
const cancelAvatar = document.querySelector("#cancel");
const user = localStorage.getItem("userName");
import { apiUrl } from '../modules/urls.js';
const avatarEndpoint = "api/v1/auction/profiles/" + user + "/media";

currentPf.innerHTML = `<img class="rounded-full w-full h-full" src="${localStorage.getItem("avatar")}" alt=""></img>`;


editAvatar.addEventListener("click", (e) => {
    avatarLink.classList.remove("hidden");
});

saveAvatar.addEventListener("click", (event) => {
    const newAvatar = document.querySelector("#img-link").value.trim();
    localStorage.setItem("avatar", newAvatar);
    const pfimg = 
    {
        "avatar": newAvatar
    }
    changeAvatar(apiUrl, avatarEndpoint, pfimg);
});

cancelAvatar.addEventListener("click", (event) => {
    document.querySelector("#img-link").value = "";
    avatarLink.classList.add("hidden");
});


async function changeAvatar(url, endpoint, newAvatar) {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    try {
        const postData = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(newAvatar),
        };
        const response = await fetch(url + endpoint, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        if (response.ok) {
            const avatar = json.avatar;
            localStorage.setItem("avatar", avatar);
            location.reload();
        } else {
            console.log("something wrong");
        }
    } catch (error) {
        console.log(error);
    } 
};
