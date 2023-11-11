const apiKey = '1d9c771e4dd8047bb81c158cb1af5f8e';
const moviesPerPage = 6;
let currentPage = 1;
let currentSearchQuery = ''; 

// Elementos HTML
const searchInput = document.getElementById('search');
const moviesContainer = document.getElementById('movies');
const paginationContainer = document.getElementById('pagination');
const suggestionsContainer = document.getElementById('suggestions');

// Função para buscar filmes com base na página e na pesquisa
async function getMoviesByPage(page, searchQuery) {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${page}&language=pt-BR`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Manipule os dados aqui
        displayMovies(data.results);
        updatePagination(data.total_pages);
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
    }
}

function displayMovies(movies) {
    // Limpe o conteúdo anterior
    moviesContainer.innerHTML = '';

    // Limitando a exibição a apenas 6 filmes
    const moviesToDisplay = movies.slice(0, moviesPerPage);

    moviesToDisplay.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const movieLink = document.createElement('a');
        movieLink.style.color = 'black';
        movieLink.href = `/fp.html?id=${movie.id}`; // Adicione o ID do filme à URL
        movieLink.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
                <p>Classificação: ${movie.vote_average}</p>
            </div>
        `;

        movieCard.appendChild(movieLink);
        moviesContainer.appendChild(movieCard);
    });
}

// Função para atualizar a paginação
function updatePagination(totalPages) {
    paginationContainer.innerHTML = '';

    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => goToPage(i));
            paginationContainer.appendChild(pageButton);
        }
    }
}

// Função para ir para uma página específica
function goToPage(page) {
    if (page !== currentPage) {
        currentPage = page;
        getMoviesByPage(currentPage, currentSearchQuery);
    }
}

// Função para lidar com a pesquisa
function handleSearch() {
    const query = searchInput.value.trim();

    if (query !== '') {
        currentSearchQuery = query; // Mantenha o contexto da pesquisa
        getMoviesByPage(currentPage, currentSearchQuery);
    } else {
        alert('Por favor, insira um termo de pesquisa válido.');
    }
}

// Função para lidar com a pesquisa quando o usuário pressiona Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
}
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', handleSearch);

// Adicione um ouvinte de evento para lidar com a pesquisa quando o usuário pressionar Enter
searchInput.addEventListener('keypress', handleKeyPress);


// Adicione um ouvinte de evento para lidar com a pesquisa
searchInput.addEventListener('keypress', handleKeyPress);

// Função para exibir sugestões de pesquisa
function displaySuggestions(suggestions) {
    suggestionsContainer.innerHTML = '';

    suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion');
        suggestionItem.textContent = suggestion;

        suggestionItem.addEventListener('click', () => {
            searchInput.value = suggestion;
            handleSearch(); // Execute a pesquisa quando uma sugestão for selecionada
        });

        suggestionsContainer.appendChild(suggestionItem);
    });
}

// Função para lidar com a digitação na barra de pesquisa
function handleInput() {
    const searchTerm = searchInput.value.trim();
    // Simule sugestões com base no termo de pesquisa (você pode buscar sugestões de uma fonte de dados externa)
}

// Adicione um ouvinte de evento para lidar com a digitação na barra de pesquisa
searchInput.addEventListener('input', handleInput);

// Exemplo de uso inicial para carregar a primeira página de resultados
getMoviesByPage(currentPage, currentSearchQuery);
