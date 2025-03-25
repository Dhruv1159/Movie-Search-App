document.addEventListener("DOMContentLoaded", () => {
  getMovieData("3 idiots");
});

const btn = document.getElementById("submit");

btn.addEventListener("click", () => {
  const movie = document.getElementById("search_bar").value;
  getMovieData(movie);
});

const url = "http://www.omdbapi.com/?";
const key = "apikey=41b3c925";
const options = {
  method: "GET",
};
function getMovieData(movie) {
  fetch(url + "t=" + movie + "&" + key, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("error in fetching data");
      }
      return response.json();
    })
    .then((data) => {
      const title = document.getElementById("title");
      const year = document.getElementById("year");
      const actor = document.getElementById("actors");
      const box_office = document.getElementById("box-office");
      const country = document.getElementById("country");
      const director = document.getElementById("director");
      const writer = document.getElementById("writer");
      const genre = document.getElementById("genre");
      const lang = document.getElementById("lang");
      const plot = document.getElementById("plot");
      const rating = document.getElementById("rating");
      const img = document.getElementById("img");
      console.log(data);
      img.src = data.Poster;
      title.innerHTML = data.Title;
      year.innerHTML = data.Year;
      actor.innerHTML = data.Actors;
      box_office.innerHTML = data.BoxOffice;
      country.innerHTML = data.Country;
      director.innerHTML = data.Director;
      writer.innerHTML = data.Writer;
      genre.innerHTML = data.Genre;
      lang.innerHTML = data.Language;
      plot.innerHTML = data.Plot;
      rating.innerHTML = data.imdbRating;
    })
    .catch((error) => {
      console.log(error);
    });
}
