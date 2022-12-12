import { homeLoggedIn } from "../modules/homepage.js";
import { homeLoggedOut } from "../modules/homepage.js";
import { logoutBtn } from "../modules/homepage.js";
import { getPosts } from "../modules/output.js";
import { apiUrl } from '../modules/urls.js';

const listingsEndpoint = "api/v1/auction/listings";

homeLoggedIn();

getPosts(apiUrl, listingsEndpoint);

logoutBtn.addEventListener("click", (event) => {
    homeLoggedOut()
});