const movies = [
    {
        title: "Obsession",
        rating: 10,
        image: "../images/posters/Obsession_theatrical_poster.jpeg"
        /* insert other stuff here */
    },
    {
        title: "White",
        rating: 6.9,
        image: "../images/posters/white.png"

    },
    {
        title: "Canada",
        rating: 100,
        image: "../images/posters/Canada_Chibi_2011.webp",
        movieId: "https://hetalia.fandom.com/wiki/Canada"
    },
        {
        title: "Obsession",
        rating: 10,
        image: "../images/posters/Obsession_theatrical_poster.jpeg"
        /* insert other stuff here */
    },
    {
        title: "White",
        rating: 6.9,
        image: "../images/posters/white.png"

    },
    {
        title: "Canada",
        rating: 100,
        image: "../images/posters/Canada_Chibi_2011.webp",
        movieId: "https://hetalia.fandom.com/wiki/Canada"
    },
{
        title: "Obsession",
        rating: 10,
        image: "../images/posters/Obsession_theatrical_poster.jpeg"
        /* insert other stuff here */
    },
    {
        title: "White",
        rating: 6.9,
        image: "../images/posters/white.png"

    },
    {
        title: "Canada",
        rating: 100,
        image: "../images/posters/Canada_Chibi_2011.webp",
        movieId: "https://hetalia.fandom.com/wiki/Canada"
    },
        {
        title: "Obsession",
        rating: 10,
        image: "../images/posters/Obsession_theatrical_poster.jpeg"
        /* insert other stuff here */
    },
    {
        title: "White",
        rating: 6.9,
        image: "../images/posters/white.png"

    },
    {
        title: "Canada",
        rating: 100,
        image: "../images/posters/Canada_Chibi_2011.webp",
        movieId: "https://hetalia.fandom.com/wiki/Canada"
    },
]




function createMovieCard(movie) {

    return ` 
        <a href="${movie.movieId}" class="movie-card">
            <img class="movie-poster" src="${movie.image}">
            <div class="movie-info">

                <p class="movie-rating">
                    ${movie.rating}
                </p>

                <h3 class="movie-title">
                    ${movie.title}
                </h3>
            </div> 
        </a>`
       


}



const movieList = document.getElementById("movie-container")


movies.forEach(movie => {

    movieList.innerHTML += createMovieCard(movie);

})


const leftButton = document.getElementById("left")

const rightButton = document.getElementById("right")

leftButton.addEventListener("click", () => {

    movieList.scrollBy({
        left: -movieList.clientWidth,
        behavior: "smooth"
    })

})
rightButton.addEventListener("click", () => {

    movieList.scrollBy({
        left: movieList.clientWidth,
        behavior: "smooth"
    })
})