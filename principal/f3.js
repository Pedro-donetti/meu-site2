function adicionarFilme() {
    var novoFilmeInput = document.getElementById("novoFilme");
    var filme = novoFilmeInput.value;
 
    if (filme === "") {
        alert("Por favor, digite o nome do filme.");
        return;
    }
 
    // Obtém a lista de filmes favoritos do armazenamento local (se já existir)
    var filmes = JSON.parse(localStorage.getItem("filmes")) || [];
 
 
    // Define a imagem pré-definida para o filme
    var imagemPredefinida = "op.jpg" ; // Substitua pelo caminho real da imagem
 
    // Adiciona o novo filme à lista com a imagem pré-definida
    filmes.push({ nome: filme, imagem: imagemPredefinida });
 
    // Armazena a lista atualizada de filmes no armazenamento local
    localStorage.setItem("filmes", JSON.stringify(filmes));
 
    // Limpa o campo de entrada
    novoFilmeInput.value = "";
 
    // Redireciona para a página de visualização
    window.location.href = "perfil.html";
 }