function abreConfirmacao() {
    const modal = document.getElementById("confirmacao");
    const fundo = document.getElementById("fundo-modal");

    modal.classList.remove("hidden");
    fundo.classList.remove("hidden");
}

// // Simulação de autenticação
// const usuarioLogadoEmail = localStorage.getItem("usuarioLogadoEmail");

// // Recuperar os dados do usuário logado
// function getUsuarioLogado() {
//     const usuariosJSON = localStorage.getItem('usuarios');
//     const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];
//     return usuarios.find(usuario => usuario.email === usuarioLogadoEmail);
// }

// // Preencher o formulário com os dados do usuário logado
// function preencherFormulario() {
//     const usuarioLogado = getUsuarioLogado();
//     if (usuarioLogado) {
//         document.getElementById('nome').value = usuarioLogado.nome;
//         document.getElementById('cpf').value = usuarioLogado.cpf;
//         document.getElementById('email').value = usuarioLogado.email;
//         document.getElementById('telefone').value = usuarioLogado.telefone;
//         document.getElementById("cidade").value = usuarioLogado.cidade;
//     } /*else {
//         alert('Usuário não encontrado.');
//     }*/
// }

// // Salvar as alterações no perfil
// document.getElementById("formulario").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const nome = document.getElementById("nome").value;
//   const cpf = document.getElementById("cpf").value;
//   const email = document.getElementById("email").value;
//   const telefone = document.getElementById("telefone").value;
//   const cidade = document.getElementById("cidade").value;

//   const usuariosJSON = localStorage.getItem("usuarios");
//   const usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : [];

//   const usuarioIndex = usuarios.findIndex(
//     (usuario) => usuario.email === usuarioLogadoEmail
//   );
//   if (usuarioIndex !== -1) {
//     usuarios[usuarioIndex] = {
//       nome,
//       cpf,
//       email,
//       telefone,
//       cidade,
//       senha: usuarios[usuarioIndex].senha,
//     };
//     localStorage.setItem("usuarios", JSON.stringify(usuarios));
//     alert("Dados do perfil atualizados com sucesso!");
//   } else {
//     alert("Erro ao atualizar o perfil. Usuário não encontrado.");
//   }
// });

// // Chamar a função para preencher o formulário quando a página carregar
// window.onload = preencherFormulario;
