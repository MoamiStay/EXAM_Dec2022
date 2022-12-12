const out = document.querySelector("#output");

export async function getPosts(url, endpoint) {
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
            posts(json)
        } else {
            // loginContent.innerHTML = "Password or Email is invalid";
        }
    } catch (error) {
        console.log(error);
    } 
};


export async function posts(listings) {
    // console.log(listings[i].media);
    out.innerHTML = "";
       for (let i = 0; i < 100; i++ ) {
        // console.log(listings[i]);
        out.innerHTML += `
 <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
    <h2 class="">${listings[i].title}</h2>
        <img class="rounded-t-lg" src="${listings[i].media[0]}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Current bids: ${listings[i]._count.bids}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ends: ${listings[i].endsAt}</p>
        <a href="#"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Bid</button></a>
    </div>
</div>
        `
       } 
    out.innerHTML += "hello"
};






