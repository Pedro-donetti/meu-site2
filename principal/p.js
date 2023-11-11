
// Obtém a lista de filmes favoritos do armazenamento local
var filmes = JSON.parse(localStorage.getItem("filmes")) || [];

var listaFilmes = document.getElementById("listaFilmes");

// Exibe os filmes na lista
filmes.forEach(function(filme) {
    var novoItem = document.createElement("li");

    // Cria uma imagem
    var imagem = document.createElement("img");
    imagem.src = filme.imagem;
    imagem.alt = "Imagem do Filme";

    // Cria um elemento de parágrafo para o nome do filme
    var nomeFilme = document.createElement("p");
    nomeFilme.textContent = filme.nome;

    // Cria um botão de exclusão
    var botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.onclick = function() {
        // Remove o filme da lista de filmes favoritos e do armazenamento local
        var index = filmes.indexOf(filme);
        if (index !== -1) {
            filmes.splice(index, 1);
            localStorage.setItem("filmes", JSON.stringify(filmes));
            atualizarListaFilmes();
        }
    };

    novoItem.appendChild(imagem);
    novoItem.appendChild(nomeFilme);
    novoItem.appendChild(botaoExcluir);
    listaFilmes.appendChild(novoItem);
});

function atualizarListaFilmes() {
    listaFilmes.innerHTML = "";
    // Exibe a lista de filmes favoritos atualizada
    filmes.forEach(function(filme) {
        var novoItem = document.createElement("li");

        // Cria uma imagem
        var imagem = document.createElement("img");
        imagem.src = filme.imagem;
        imagem.alt = "Imagem do Filme";

        // Cria um elemento de parágrafo para o nome do filme
        var nomeFilme = document.createElement("p");
        nomeFilme.textContent = filme.nome;

        // Cria um botão de exclusão
        var botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.onclick = function() {
            var index = filmes.indexOf(filme);
            if (index !== -1) {
                filmes.splice(index, 1);
                localStorage.setItem("filmes", JSON.stringify(filmes));
                atualizarListaFilmes();
            }
        };

        novoItem.appendChild(imagem);
        novoItem.appendChild(nomeFilme);
        novoItem.appendChild(botaoExcluir);
        listaFilmes.appendChild(novoItem);
    
});
}

  // Verificar se há uma foto de perfil armazenada no localStorage
  const storedProfileImage = localStorage.getItem('profileImage');

  // Carregar a foto de perfil armazenada, se existir
  if (storedProfileImage) {
      document.getElementById('profileImage').src = storedProfileImage;
  }

  // Event listener para o input de arquivo
  document.getElementById("fileInput").addEventListener("change", function(event) {
      var file = event.target.files[0];
      if (file) {
          var reader = new FileReader();
          reader.onload = function(e) {
              var profileImage = document.getElementById("profileImage");
              profileImage.src = e.target.result;

              // Armazenar a foto de perfil no localStorage
              localStorage.setItem('profileImage', e.target.result);
          };
          reader.readAsDataURL(file);
      }
  });


        var usuario = localStorage.getItem('usuario');

        // Exibir os valores na página de perfil
        document.getElementById('usuarioDoPerfil').textContent = usuario;


        window.history.pushState({}, '', '');
        function bloquearAcaoVoltar() {
            window.history.pushState(null, '', window.location.href);
            window.addEventListener('popstate', function (event) {
            });
          }
          
          
  function logout() {
    clearInterval(sessionCheckInterval); // Pare de verificar a sessão
    localStorage.removeItem('token'); // Remova o token de autenticação
    localStorage.removeItem('listaUser'); // Remova as informações do usuário
    window.location.href = 'file:///C:/Users/julio/Desktop/login-cadastro/login.html'; // Redirecione para a página de login
}

// Função para verificar a sessão
function checkSession() {
    const token = localStorage.getItem('token');

    if (!token) {
        // Se não houver token, redirecione para a página de login
        window.location.href = 'file:///C:/Users/julio/Desktop/login-cadastro/login.html';
    }
}

// Verifique a sessão a cada 5 segundos (pode ajustar o intervalo conforme necessário)
const sessionCheckInterval = setInterval(checkSession, 5000);

// Execute a verificação de sessão quando a página é carregada
checkSession();
          
          // Adicione ouvintes de eventos aos botões de sair da conta e excluir conta
          document.getElementById('sairConta').addEventListener('click', sairDaConta);
          document.getElementById('excluirConta').addEventListener('click', excluirConta);
        
        
          function sairDaConta() {
            localStorage.removeItem('token'); // Remova o token de autenticação
            localStorage.removeItem('userLogado'); // Remova os dados do usuário logado
            window.location.href = 'file:///C:/Users/julio/Desktop/login-cadastro/login.html';
             // Redirecione para a página de login
          }
        
        
          const token = localStorage.getItem('token');
        if (!token) {
          // O usuário não está autenticado, redirecione para a página de login
          window.location.href = 'index.html';
        
        }