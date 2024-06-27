const imgInterrogacao = document.querySelector(".img-atencao");


document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um evento de clique ao botão de login
    document.getElementById('button').addEventListener('click', function() {
        // Verifica se o usuário existe no localStorage
        if(localStorage.getItem('usuario')) {
            // Recupera os dados do usuário
            const usuario = JSON.parse(localStorage.getItem('usuario'));

            // Verifica se o email e senha informados correspondem aos dados do usuário cadastrado
            const emailInformado = document.querySelector('.email').value;
            const senhaInformada = document.querySelector('.senha').value;
            

            if(emailInformado === usuario.email && senhaInformada === usuario.senha) {
                // Se o email e a senha estiverem corretos, redireciona para a página inicial do usuário
                window.location.href = '../home/home-cliente.html';
            } else {
                // Se o email ou a senha estiverem incorretos, exibe uma mensagem de erro
                mostrarMensagemErro("Email ou senha incorretos. Por favor, tente novamente.");
            }
        } else if(localStorage.getItem('coletores')) {
            const coletor = JSON.parse(localStorage.getItem('coletores'));

            const emailInformado = document.querySelector('.email').value;
            const senhaInformada = document.querySelector('.senha').value;

            if(emailInformado === coletor[0].email_coletor && senhaInformada === coletor[0].senha_coletor) {
                // Se o email e a senha estiverem corretos, redireciona para a página inicial do usuário
                window.location.href = '../home/home-coletor.html';
            } else {
                // Se o email ou a senha estiverem incorretos, exibe uma mensagem de erro
                mostrarMensagemErro(" Email ou senha incorretos. Por favor, tente novamente.");
            }

        } else {
            // Se não houver usuário cadastrado, exibe uma mensagem de erro
            mostrarMensagemErro("Nenhum usuário cadastrado. Por favor, crie uma conta.");
        }
    });
});

function mostrarMensagemErro(mensagem) {
    // Exibe a mensagem de erro na tela
    const mensagemErro = document.querySelector('.mensagem-erro');
    mensagemErro.innerText = mensagem;
    mensagemErro.style.display = 'block';
    imgInterrogacao.style.display = 'block';
}
