const movies = [
  {
    title: "Sample Movie One",
    year: 2026,
    genre: "Action",
    // Replace this with a file you are authorized to distribute.
    download: "movies/sample-movie-one.mp4"
  },
  {
    title: "Sample Movie Two",
    year: 2026,
    genre: "Comedy",
    download: "movies/sample-movie-two.mp4"
  },
  {
    title: "Sample Movie Three",
    year: 2025,
    genre: "Drama",
    download: "movies/sample-movie-three.mp4"
  },
  {
    title: "Sample Movie Four",
    year: 2025,
    genre: "Adventure",
    download: "movies/sample-movie-four.mp4"
  },
  {
    title: "Sample Movie Five",
    year: 2024,
    genre: "Thriller",
    download: "movies/sample-movie-five.mp4"
  },
  {
    title: "Sample Movie Six",
    year: 2024,
    genre: "Animation",
    download: "movies/sample-movie-six.mp4"
  }
];

const grid = document.getElementById("movieGrid");
const search = document.getElementById("search");

function displayMovies(list) {
  grid.innerHTML = list.map(movie => `
    <article class="card">
      <div class="poster">${movie.title}</div>
      <div class="info">
        <h3>${movie.title}</h3>
        <p class="meta">${movie.year} • ${movie.genre}</p>
        <a class="download" href="${movie.download}" download>Download</a>
      </div>
    </article>
  `).join("");
}

search.addEventListener("input", () => {
  const term = search.value.toLowerCase().trim();
  const filtered = movies.filter(movie =>
    `${movie.title} ${movie.genre} ${movie.year}`.toLowerCase().includes(term)
  );
  displayMovies(filtered);
});

displayMovies(movies);
