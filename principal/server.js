window.location.href = `/fp.html?id=${movieId}`;
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id'); // Obtém o ID do filme da URL

    const apiKey = '1d9c771e4dd8047bb81c158cb1af5f8e';

    if (movieId) {
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const movieDetails = document.getElementById('movie-details');
                const movieTitle = document.createElement('h2');
                movieTitle.textContent = data.title;
                movieDetails.appendChild(movieTitle);

                // Exiba outras informações sobre o filme aqui, como imagem, sinopse, etc.
            })
            .catch((error) => {
                console.error('Erro ao obter detalhes do filme:', error);
            });
    } else {
        console.error('ID do filme não especificado na URL.');
    }
});
