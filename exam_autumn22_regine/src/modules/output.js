export let year = 0, month = 0, day = 0;

export async function getPosts(url, endpoint, out) {
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
        console.log(json);
        if (response.ok) {
            posts(out, json)
        } else {
        // loginContent.innerHTML = "Password or Email is invalid";
        }
    } catch (error) {
        console.log(error);
    } 
};


export async function posts(out, listings) {
    out.innerHTML = "";
       for (let i = 0; i < 100; i++ ) {
        dates(listings[i].endsAt)
        let highBid = 0;
        for (let bid of listings[i].bids) { highBid = bid;}
        out.innerHTML += `
 <div class="m-3 h-32 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="./html/view.html?id=${listings[i].id}">
        <img class="rounded-t-lg w-full h-3/4 object-cover" src="${listings[i].media[0]}" alt="" />
    </a>
    <div class="p-5">
        <h2 class="text-xl copytext my-1.5">${listings[i].title}</h2>
        <a href="#">
            <h5 class="mb-2 text-xl copytext font-bold tracking-tight text-gray-900 dark:text-white">Highest bid: ${highBid.amount + ` <i class="fa-solid fa-coins"></i>`}</h5>
        </a>
        <p class="mb-3 font-normal copytext text-gray-700 dark:text-gray-400">Ends: ${`${day}. ${month}, ${year}`}</p>
        <a href="./html/view.html?id=${listings[i].id}"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</button></a>
    </div>
</div>
        `
       } 
};


export function dates(date) {
    year = date.slice(0, 4);
    day = date.slice(8, 10);
    // console.log(date.slice(5, 7));
    if(date.slice(5, 7) == "01") {month = "January"};
    if(date.slice(5, 7) == "02") {month = "February"};
    if(date.slice(5, 7) == "03") {month = "March"};
    if(date.slice(5, 7) == "04") {month = "April"};
    if(date.slice(5, 7) == "05") {month = "May"};
    if(date.slice(5, 7) == "06") {month = "June"};
    if(date.slice(5, 7) == "07") {month = "July"};
    if(date.slice(5, 7) == "08") {month = "August"};
    if(date.slice(5, 7) == "09") {month = "September"};
    if(date.slice(5, 7) == "10") {month = "October"};
    if(date.slice(5, 7) == "11") {month = "November"};
    if(date.slice(5, 7) == "12") {month = "Desember"};
}