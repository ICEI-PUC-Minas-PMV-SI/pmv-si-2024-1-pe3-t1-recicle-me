// Função para obter os usuários armazenados no localStorage
function getUsers() {
  const usersJSON = localStorage.getItem("usuarios");
  return usersJSON ? JSON.parse(usersJSON) : [];
}

// Função para mostrar mensagens de erro
function showError(message) {
  const errorMessageElement = document.querySelector(".mensagem-erro");
  errorMessageElement.textContent = message;
  errorMessageElement.style.display = "block";
}

// Função para esconder mensagens de erro
function hideError() {
  const errorMessageElement = document.querySelector(".mensagem-erro");
  errorMessageElement.style.display = "none";
}

// Função de login
document.getElementById("btnLogin").addEventListener("click", function (e) {
  e.preventDefault();
  hideError();

  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  const users = getUsers();
  const user = users.find(
    (user) => user.email === email && atob(user.senha) === senha
  );

  if (user) {
    // Usuário autenticado com sucesso
    localStorage.setItem("usuarioLogadoEmail", email);
    window.location.href = "usuario.html"; // Redireciona para a página de perfil
  } else {
    // Falha na autenticação
    showError("Email ou senha incorretos. Tente novamente.");
  }
});

// Código para carregar os dados do usuário logado na página de perfil
function carregarPerfil() {
  const usuarioLogadoEmail = localStorage.getItem("usuarioLogadoEmail");
  if (!usuarioLogadoEmail) {
    window.location.href = "login.html"; // Redireciona para a página de login se não estiver logado
    return;
  }

  const users = getUsers();
  const user = users.find((user) => user.email === usuarioLogadoEmail);

  if (user) {
    document.getElementById("nome").value = user.nome;
    document.getElementById("cpf").value = user.cpf;
    document.getElementById("email").value = user.email;
    document.getElementById("telefone").value = user.telefone;
  } else {
    showError("Usuário não encontrado.");
  }
}
