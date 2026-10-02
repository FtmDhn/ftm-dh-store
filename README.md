# FTM-DH Store 🛍️

> **A simple store can still be a great place to learn.
> This one was my first real step into working with APIs.**

**FTM-DH Store** is a responsive product browsing website built with **Vanilla JavaScript**, where products are fetched dynamically from an external API and displayed through a clean, modern interface.

But this project is more than just a store UI.

It is my **first practice project focused on working with an API**, and honestly, I'm really excited about it. 💛

For the first time, I worked with asynchronous JavaScript using **ES7 `async/await`**, handled API responses, created dynamic product cards, implemented product details, search, and built pagination from scratch.

> **This project wasn't about building a perfect store.
> It was about finally making JavaScript communicate with real data.**


## The Concept

Instead of hardcoding products directly into the HTML, this project gets the data dynamically from the **DummyJSON Products API**.

The page starts by requesting product data, then JavaScript processes the response and generates the UI dynamically.

Users can:

* Browse products
* Navigate between pages
* Search for products
* Open detailed product information
* View ratings, prices, brands, categories and reviews
* Explore a responsive layout across different screen sizes

The entire experience is powered by **Vanilla JavaScript and API requests**.


## 🚀 My First API Project

This project is especially meaningful to me because it was my **first project specifically created to practice API integration**.

One of the things I'm most excited about is that I finally started working with:

### `async / await` — ES7

Instead of writing everything with callbacks or only practicing JavaScript with static data, I learned how to work with asynchronous operations in a cleaner way:

```js
async function getApi(Api) {
    let response = await fetch(Api)

    if (response.ok) {
        return await response.json()
    }
}
```

This helped me understand how JavaScript waits for data from an API before continuing with the rest of the application.

And honestly...

> **Seeing my own JavaScript fetch real data and turn it into a working website was one of the most exciting parts of this project. 🥹**


## What I Practiced

This project became my playground for practicing several important JavaScript concepts:

* **API Integration** — Fetching real product data from an external API.
* **Async/Await** — Handling asynchronous JavaScript using ES7 syntax.
* **Fetch API** — Sending requests and processing API responses.
* **JSON Data** — Reading and working with structured API data.
* **Dynamic DOM Manipulation** — Creating product cards directly with JavaScript.
* **Pagination** — Calculating pages and requesting products using `limit` and `skip`.
* **Search** — Sending search queries to the API and displaying matching results.
* **Dynamic Product Details** — Fetching and displaying individual product information.
* **Event Handling** — Managing clicks, search input and pagination.
* **Responsive Design** — Building an experience that adapts to mobile, tablet and desktop.
* **CSS Animations** — Adding subtle hover effects and transitions to make the interface feel alive.


## Pagination Logic

One of the parts I particularly enjoyed was building the pagination myself.

The API supports `limit` and `skip`, which allowed me to calculate which products should be displayed on each page:

```js
skip = (page * 20) - 20
```

I then use the calculated value to request the correct products:

```js
https://dummyjson.com/products?limit=20&skip=${skip}
```

The number of pages is also calculated dynamically:

```js
const num = Math.ceil(data.total / 20)
```

So the pagination isn't hardcoded — it is generated based on the actual API data.

## 🔎 Search

The project also includes a dynamic product search.

As the user types, JavaScript sends the query to the API:

```js
https://dummyjson.com/products/search?q=${query}
```

The returned products are then rendered dynamically inside the page.

## ✨ Features

* **Dynamic Product Listing**
* **External API Integration**
* **Async/Await with ES7**
* **Product Search**
* **Dynamic Pagination**
* **Product Details Page**
* **Product Ratings & Reviews**
* **Prices & Product Information**
* **Fully Responsive Layout**
* **Modern Glassmorphism-Inspired UI**
* **Smooth Hover & Transition Effects**
* **Real-Time API Data**

## Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![REST API](https://img.shields.io/badge/REST%20API-FF6B35?style=for-the-badge\&logo=fastapi\&logoColor=white)

### Technologies & Concepts

* HTML5
* CSS3
* Vanilla JavaScript
* Fetch API
* ES7 `async/await`
* DOM Manipulation
* REST API
* Responsive Web Design

## Explore the Store

**Live Demo:**
[Click here to view the project online](YOUR-LIVE-DEMO-LINK)

**Preview:** <br>

<img width="1536" height="1024" alt="FTM-DH Store Preview" src="YOUR-SCREENSHOT-LINK" />


## ⚙️ Getting Started

No frameworks or build tools are required.

### 1. Clone the repository

```bash
git clone https://github.com/FtmDhn/YOUR-REPO-NAME.git
```

### 2. Open the project

```bash
cd YOUR-REPO-NAME
```

### 3. Run

Open `index.html` in your browser.

That's it.

The application will fetch product data directly from the API.

> **Note:** An internet connection is required because the products are loaded from the DummyJSON API.


## 👩‍💻 Developer

This project was designed and developed by:

### **Fatemeh Dehghani**

*Front-End Developer & JavaScript Learner*

This project marks an important step in my JavaScript journey.

It was my **first dedicated API practice project**, where I learned how to move beyond static websites and start working with real external data.

Learning `fetch`, understanding asynchronous operations, and finally using **ES7 `async/await`** to build something that actually communicates with an API was a really exciting experience for me.

I'm continuing to improve my JavaScript and React skills while building more projects and exploring how real-world web applications work.

[![GitHub](https://img.shields.io/badge/GitHub-FtmDhn-181717?style=for-the-badge\&logo=github)](https://github.com/FtmDhn)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fatemeh%20Dehghani-0A66C2?style=for-the-badge\&logo=linkedin)](https://linkedin.com/in/FatemehDehghani)

[![Instagram](https://img.shields.io/badge/Instagram-@ftm.dehgni-E4405F?style=for-the-badge\&logo=instagram)](https://instagram.com/ftm.dehgni)


<div align="center">

<b>From static data to real API requests. 🚀</b>

  <br>

<sub>My first API project — and definitely not the last.</sub>

</div>
