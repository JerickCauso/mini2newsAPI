const global = {
  currentPage: window.location.pathname,
  search: {
    term: "",
    type: "",
    page: 1,
    totalPages: 1,
  },
  api: {
    apiKey: "9167dae881545d7d1ebf42ac1186d6ae",
    apiUrl: "https://gnews.io/api/v4/",
  },
};

//Carousel
function carouselNews() {
  const apiKey = "bd6c2317d02803fb4cf4fa5deaff149c";
  category = "general";
  url =
    "https://gnews.io/api/v4/top-headlines?category=" +
    category +
    "&lang=en&country=ph&max=5&apikey=" +
    apiKey;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      articles = data.articles;
      console.log(articles);
      articles.forEach((carouselNews) => {
        const div = document.createElement("div");
        const dataCarousel = " data-carousel-item";
        div.classList.add("hidden duration-700 ease-in-out" + dataCarousel);
        div.innerHTML = `
            <section class="text-gray-600 body-font">
              <div
                class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
              >
                <div
                  class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                >
                  <h1
                    class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
                  >${carouselNews.title}
                    <br class="hidden lg:inline-block" />readymade gluten
                  </h1>
                  <p class="mb-8 leading-relaxed">
                    ${carouselNews.description}
                  </p>
                  <div class="flex justify-center">
                    <a href="${carouselNews.url}">
                      <button
                        class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        Read more
                      </button></a
                    >
                  </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                    class="object-cover object-center rounded"
                    alt="hero"
                    src="${carouselNews.image}"
                  />
                </div>
              </div>
            </section>
        `;
        document.querySelector("#carousel-news").appendChild(div);
      });
    });
}

// Trending News
function displayTrendNews() {
  const apiKey = "9167dae881545d7d1ebf42ac1186d6ae";
  category = "general";
  url =
    "https://gnews.io/api/v4/top-headlines?category=" +
    category +
    "&lang=en&country=ph&max=10&apikey=" +
    apiKey;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      articles = data.articles;
      //   console.log(articles);
      articles.forEach((trendNews) => {
        const div = document.createElement("div");
        div.classList.add("lg:flex");
        div.innerHTML = `

            <img
              class="object-cover w-full h-56 rounded-lg lg:w-64"
              src="${trendNews.image}"
              alt=""
            />

            <div class="flex flex-col justify-between py-6 lg:mx-6">
              <a
                href="${trendNews.url}"
                class="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
              >
                ${trendNews.title}
              </a>

              <span class="text-sm text-gray-500 dark:text-gray-300"
                >On: ${trendNews.publishedAt.slice(0, 10)}</span
              >
            </div>

        `;
        document.querySelector("#trend-news").appendChild(div);
      });
    });
}

function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      carouselNews();
      displayTrendNews();
      break;
    case "/shows.html":
      //   displayPopularShows();
      break;
    case "/movie-details.html":
      //   displayMovieDetails();
      break;
    case "/tv-details.html":
      //   displayShowDetails();
      break;
    case "/search.html":
      //   search();
      break;
  }

  //   highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
