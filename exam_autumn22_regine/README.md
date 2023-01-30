# Bidwell auction website

![Bidwell](./media/img/bidwell_bad.jpg "Bidwell")  
[Visit deployed site here](https://exam-auction-regine.netlify.app/ "Bidwell")  
[Figma prototype](https://www.figma.com/file/2qmH9vKsK4TnIK6BahmGE2/Exam_Autumn22_Auction?node-id=0%3A1&t=1YxQiFVTlD3YEDeb-1 "Figma prototype")

---

# Process and result

This project turned out to be quite a fail. Unfortunately I did not have my priorities right this time and the end result ended up as this mess. I do want to re-create this project with some significant changes to the design, as well as trying some other approaches for JS.

I don't want to talk all bad about my own work, but I kinda struggle to find good point to make here. The whole page is just a little wonky.

Design-wise I think I had a good idea, but the end result just didn't work out. I think you can kinda easily tell just by looking at it.

---

# Setup and usage

You need to log-in to be able to view all content.
To register new account: Create an account by using any made-up email ending with _@noroff.no or _@stud.noroff.no.

Borrow account:
**Email: bubba@noroff.no**  
**Password: 12345678**

npm i  
build: npm run build  
preview: npm rum preview

---

# Assignment

Create a auction website. You decide who the user-group will be.

**Criteria:**

1. A user with a stud.noroff.no email may register
2. RU may login
3. RU may logout
4. RU may update their avatar
5. RU may create a Listing with a title, deadline, media and description.
6. RU may add a Bid to another user's Listing.
7. RU may view the last highest Bid made on a Listing.
8. RU may view their total credit.
9. RU may get credit by getting a successful Bid on their Listing.
10. RU may use credit to make a Bid on anothers user's Listing.
11. A user (registered or not) may search through Listings.

---

<!-- HTML:   verification: I have consistently been putting buttons inside a tags. (on index and view listing) But I didn't realize until too late and didn't have time to fix it. It also gives a warning about missing heading in "View listing", however the headning is added as the title of the listing being the h1 through js.
WCAG:   ![Color-blind WCAG](./submission/images/colorblindWcag.jpg?raw=true "Color-blind WCAG")
![Color contrast WCAG](./submission/images/colorContrast.jpg?raw=true "Color contrast WCAG") <br>
The light blue color that is primerely used on buttons is slightly lacking in contrast. Would adjust, but ran out of time.

* issues with credits/avatar. The page struggles to load avatar and credits. I should have made a better solution for saving and getting the avatar and credits. (It does work, just not most of the time..). I would rather try to create a function to store values in localstorage from the initial login, but I did not have time to redo this part.
* styling is lacking compared to the figma prototype. Working with tailwind was more time-consuming than expected.
* modules got a bid confused and mixed up towards the end. It was due to poor planning prior to starting the implementation. Learned from mistakes and feel confident that I will provide more optimal code and usage of moduels in the future.
* Ran out of time to set up any kind og testing.

* Hade some issues with setting up netlify due to the path to the index.html, so I setup the page manually by using local files. The hosted page is fully up to date with the most recent commit.  -->

# Sources

Images:
painintg of birds: https://unsplash.com/photos/ddKNTAwZu3k

feather png: Bought license (lost the link.. )

Typography:
https://www.fontspace.com/magilio-font-f61812 <br>
https://themeui.net/migha-free-variable-font/
