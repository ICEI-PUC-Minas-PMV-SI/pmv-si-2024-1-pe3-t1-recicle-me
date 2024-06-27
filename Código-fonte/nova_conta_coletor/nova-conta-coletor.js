
       document.addEventListener("DOMContentLoaded", function() {
            const opcaoDescartar = document.getElementById('descartar');
            const opcaoDivulgar = document.getElementById('divulgar');

            opcaoDescartar.addEventListener('change', function() {
                if (opcaoDescartar.checked) {
                    window.location.href = '../nova_conta_cliente/nova-conta-cliente.html';
                }
            });

            opcaoDivulgar.addEventListener('change', function() {
                if (opcaoDivulgar.checked) {
                    window.location.href = '../nova_conta_coletor/nova-conta-coletor.html';
                }
            });
        });

        
        // Verifica se há um estado salvo para os botões de rádio
        if(localStorage.getItem('opcaoSelecionada')) {
            const opcaoSelecionada = localStorage.getItem('opcaoSelecionada');
            document.getElementById(opcaoSelecionada).checked = true;
        }

        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', function() {
                localStorage.setItem('opcaoSelecionada', this.id);
            });
        });

        document.addEventListener("DOMContentLoaded", function() {
    const inputsObrigatorios = document.querySelectorAll('input[required]');
    const mensagemObrigatorio = document.querySelector('.mensagem-obrigatorio');

    inputsObrigatorios.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                mensagemObrigatorio.style.display = 'block';
            } else {
                mensagemObrigatorio.style.display = 'none';
            }
        });
    });
});


    // Função para exibir o pop-up com uma mensagem específica
function mostrarPopup(mensagem) {
    document.getElementById('popupMessage').innerText = mensagem;
    document.getElementById('popupContainer').style.display = 'flex';
}

// Função para fechar o pop-up
function fecharPopup() {
    document.getElementById('popupContainer').style.display = 'none';
}

// Adiciona evento de clique ao botão Fechar
document.getElementById('btnFecharPopup').addEventListener('click', fecharPopup);


// Adiciona evento de clique ao botão Cancelar
document.querySelector('.botoes button[type="button"]').addEventListener('click', function() {
    mostrarPopup("Criação de conta cancelada.");
});
 