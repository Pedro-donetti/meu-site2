

function logar() {
    let usuario = document.querySelector('#usuario');
    let userLabel = document.querySelector('#userLabel');
    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senhaLabel');
    let msgError = document.querySelector('#msgError');

    let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

    // Verifique se as credenciais correspondem a uma conta válida
    const usuarioInformado = usuario.value;
    const senhaInformada = senha.value;

    const userValid = listaUser.find(item => item.userCad === usuarioInformado && item.senhaCad === senhaInformada);

    if (userValid) {
        // Usuário válido
        window.location.href = 'nomeuser.html';

        let mathRandom = Math.random().toString(16).substr(2)
let token = mathRandom + mathRandom

localStorage.setItem('token', token)
localStorage.setItem('userLogado', JSON.stringify(userValid))

    } else {
        // Credenciais inválidas
        userLabel.style.color = 'red';
        usuario.style.borderColor = 'red';
        senhaLabel.style.color = 'red';
        senha.style.borderColor = 'red';
        msgError.style.display = 'block';
        msgError.innerHTML = 'Usuário ou senha incorretos';
        usuario.focus();
    }
}

// Verificar se o usuário está logado
const token = localStorage.getItem('token');
const userLogado = JSON.parse(localStorage.getItem('userLogado'));

if (token && userLogado) {
    // O usuário está logado
    // Você pode acessar as informações do usuário, como nome, usuário, etc., em userLogado
    // Redirecione para a página autenticada ou execute ações apropriadas
}



