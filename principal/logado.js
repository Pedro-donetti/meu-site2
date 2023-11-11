const token = localStorage.getItem('token');
const userLogado = JSON.parse(localStorage.getItem('userLogado'));

if (token && userLogado) {
    // O usuário está logado
    // Você pode acessar as informações do usuário, como nome, usuário, etc., em userLogado
    // Redirecione para a página autenticada ou execute ações apropriadas
} else {
    // O usuário não está logado
    // Redirecione para a página de login ou exiba um aviso de não autenticado
}