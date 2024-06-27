
var cardForm = document.getElementById("card-servico");
const servicosArray = JSON.parse(localStorage.getItem('servicos'));

// Faz o cadastro de serviços
cardForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var categoria = document.getElementById("categoria").value;
    var horario_atendimento = document.getElementById("horarioAtendimento").value;
    var escolher_recolher = document.getElementById("recolher").checked;
    var escolher_receber = document.getElementById("receber").checked;
    var descricao = document.getElementById("descricao").value;
    //var categoriaEscolhida = document.getElementById("categoria")

    // (categoria.options[categoria.selectedIndex].value != "")

    if (horario_atendimento && descricao && (escolher_receber || escolher_recolher) && (categoria != null)) {
        var servicos = new Array();

        if (localStorage.hasOwnProperty("servicos")) {
            //Recuperar os valores de serviços
            //Converte de String para Object
            servicos = JSON.parse(localStorage.getItem("servicos"));
        }

        // Adiciona um novo objetivo no array criado
        servicos.push({ categoria, horario_atendimento, escolher_recolher, escolher_receber, descricao });

        // Salvar no LocalStorage
        localStorage.setItem("servicos", JSON.stringify(servicos));

        // Recuperar as informações
        const servico_localstorage = localStorage.getItem("servicos");

        // Converte a string JSON em um objeto JavaScript
        var dados_servico = JSON.parse(servico_localstorage);

        alert("Sucesso! Serviço cadastrado.")

        window.location.reload();
    } else {
        alert("Ops! Necessário preencher todos os campos obrigatórios para prosseguir.")
    }
});

// Verificar se o dado existe, e se existir, mostra ele nos cards de serviços cadastrados
if (servicosArray && servicosArray.length > 0) {
    for (let i = 0; i < servicosArray.length; i++) {
        const unidadeArray = servicosArray[i];

        const cardServicoAtual = document.getElementById(`servico${i}`);
        cardServicoAtual.classList.remove("hidden");

        // Inserir o dado no input
        document.getElementById(`categoria_card${i}`).innerText = servicosArray[i].categoria;
        document.getElementById(`dia_horario_card${i}`).value = servicosArray[i].horario_atendimento;
        document.getElementById(`descricao_card${i}`).innerText = servicosArray[i].descricao;


        if (servicosArray[i].escolher_recolher === true) {
            document.getElementById(`recolher_card${i}`).checked = true;
        } else {
            document.getElementById(`recolher_card${i}`).checked = false;
        }

        if (servicosArray[i].escolher_receber === true) {
            document.getElementById(`receber_card${i}`).checked = true;
        } else {
            document.getElementById(`receber_card${i}`).checked = false;
        }
    }
}

// Habilita os botões de edição
function habilitaEdicao(numero) {
    const editarButton = document.querySelector(`.editar${numero}`);

    if (numero === 0) {
        if (editarButton.innerText === "Editar") {
            document.getElementById('dia_horario_card0').disabled = false;
            document.getElementById('descricao_card0').disabled = false;
            document.getElementById('recolher_card0').disabled = false;
            document.getElementById('receber_card0').disabled = false;
            document.querySelector(".editar0").innerText = "Salvar";

            document.getElementById("dia_horario_card0").classList.add("modoEdicao");
            document.getElementById("descricao_card0").classList.add("modoEdicao");
        } else if (editarButton.innerText === "Salvar") {
            editarServico(numero);
            document.getElementById('dia_horario_card0').disabled = true;
            document.getElementById('descricao_card0').disabled = true;
            document.getElementById('recolher_card0').disabled = true;
            document.getElementById('receber_card0').disabled = true;
            document.querySelector(".editar0").innerText = "Editar";

            document.getElementById("dia_horario_card0").classList.remove("modoEdicao");
            document.getElementById("descricao_card0").classList.remove("modoEdicao");
        }


    } else if (numero === 1) {
        if (editarButton.innerText === "Editar") {
            document.getElementById('dia_horario_card1').disabled = false;
            document.getElementById('descricao_card1').disabled = false;
            document.getElementById('recolher_card1').disabled = false;
            document.getElementById('receber_card1').disabled = false;
            document.querySelector(".editar1").innerText = "Salvar";

            document.getElementById("dia_horario_card1").classList.add("modoEdicao");
            document.getElementById("descricao_card1").classList.add("modoEdicao");
        } else if (editarButton.innerText === "Salvar") {
            editarServico(numero);
            document.getElementById('dia_horario_card1').disabled = true;
            document.getElementById('descricao_card1').disabled = true;
            document.getElementById('recolher_card1').disabled = true;
            document.getElementById('receber_card1').disabled = true;
            document.querySelector(".editar1").innerText = "Editar";

            document.getElementById("dia_horario_card1").classList.remove("modoEdicao");
            document.getElementById("descricao_card1").classList.remove("modoEdicao");
        }

    } else if (numero === 2) {
        if (editarButton.innerText === "Editar") {
            document.getElementById('dia_horario_card2').disabled = false;
            document.getElementById('descricao_card2').disabled = false;
            document.getElementById('recolher_card2').disabled = false;
            document.getElementById('receber_card2').disabled = false;
            document.querySelector(".editar2").innerText = "Salvar";

            document.getElementById("dia_horario_card2").classList.add("modoEdicao");
            document.getElementById("descricao_card2").classList.add("modoEdicao");
        } else if (editarButton.innerText === "Salvar") {
            editarServico(numero);
            document.getElementById('dia_horario_card2').disabled = true;
            document.getElementById('descricao_card2').disabled = true;
            document.getElementById('recolher_card2').disabled = true;
            document.getElementById('receber_card2').disabled = true;
            document.querySelector(".editar2").innerText = "Editar";

            document.getElementById("dia_horario_card2").classList.remove("modoEdicao");
            document.getElementById("descricao_card2").classList.remove("modoEdicao");
        }

    } else if (numero === 3) {
        if (editarButton.innerText === "Editar") {
            document.getElementById('dia_horario_card3').disabled = false;
            document.getElementById('descricao_card3').disabled = false;
            document.getElementById('recolher_card3').disabled = false;
            document.getElementById('receber_card3').disabled = false;
            document.querySelector(".editar3").innerText = "Salvar";

            document.getElementById("dia_horario_card3").classList.add("modoEdicao");
            document.getElementById("descricao_card3").classList.add("modoEdicao");
        } else if (editarButton.innerText === "Salvar") {
            editarServico(numero);
            document.getElementById('dia_horario_card3').disabled = true;
            document.getElementById('descricao_card3').disabled = true;
            document.getElementById('recolher_card3').disabled = true;
            document.getElementById('receber_card3').disabled = true;
            document.querySelector(".editar3").innerText = "Editar";

            document.getElementById("dia_horario_card3").classList.remove("modoEdicao");
            document.getElementById("descricao_card3").classList.remove("modoEdicao");
        }

    } else if (numero === 4) {
        if (editarButton.innerText === "Editar") {
            document.getElementById('dia_horario_card4').disabled = false;
            document.getElementById('descricao_card4').disabled = false;
            document.getElementById('recolher_card4').disabled = false;
            document.getElementById('receber_card4').disabled = false;
            document.querySelector(".editar4").innerText = "Salvar";

            document.getElementById("dia_horario_card4").classList.add("modoEdicao");
            document.getElementById("descricao_card4").classList.add("modoEdicao");
        } else if (editarButton.innerText === "Salvar") {
            editarServico(numero);
            document.getElementById('dia_horario_card4').disabled = true;
            document.getElementById('descricao_card4').disabled = true;
            document.getElementById('recolher_card4').disabled = true;
            document.getElementById('receber_card4').disabled = true;
            document.querySelector(".editar4").innerText = "Editar";

            document.getElementById("dia_horario_card4").classList.remove("modoEdicao");
            document.getElementById("descricao_card4").classList.remove("modoEdicao");
        }

    } else if (numero === 5) {
        if (editarButton.innerText === "Editar") {
            document.getElementById('dia_horario_card5').disabled = false;
            document.getElementById('descricao_card5').disabled = false;
            document.getElementById('recolher_card5').disabled = false;
            document.getElementById('receber_card5').disabled = false;
            document.querySelector(".editar5").innerText = "Salvar";

            document.getElementById("dia_horario_card5").classList.add("modoEdicao");
            document.getElementById("descricao_card5").classList.add("modoEdicao");
        } else if (editarButton.innerText === "Salvar") {
            editarServico(numero);
            document.getElementById('dia_horario_card5').disabled = true;
            document.getElementById('descricao_card5').disabled = true;
            document.getElementById('recolher_card5').disabled = true;
            document.getElementById('receber_card5').disabled = true;
            document.querySelector(".editar5").innerText = "Editar";

            document.getElementById("dia_horario_card5").classList.remove("modoEdicao");
            document.getElementById("descricao_card5").classList.remove("modoEdicao");
        }
    }
}

// Edita um serviço selecionado
function editarServico(id) {
    // Recuperar o array do localStorage e convertê-lo de volta para um array
    const servicosArrayEdicao = JSON.parse(localStorage.getItem('servicos'));

    // Verificar se o array existe
    if (servicosArrayEdicao) {
        // Pegar o novo nome do input
        const novoHorario = document.getElementById(`dia_horario_card${id}`).value;
        const novaDescricao = document.getElementById(`descricao_card${id}`).value;
        const novoRecolher = document.getElementById(`recolher_card${id}`).checked;
        const novoReceber = document.getElementById(`receber_card${id}`).checked;

        // Encontrar o índice do objeto a ser alterado
        const index = id;

        // Se o objeto existir no array, alterá-lo
        if (index !== -1) {
            servicosArrayEdicao[index].horario_atendimento = novoHorario;
            servicosArrayEdicao[index].descricao = novaDescricao;
            servicosArrayEdicao[index].escolher_recolher = novoRecolher;
            servicosArrayEdicao[index].escolher_receber = novoReceber;

            let categoriaEscolhida = servicosArrayEdicao[index].categoria;

            // Armazenar o array atualizado de volta no localStorage
            localStorage.setItem('servicos', JSON.stringify(servicosArrayEdicao));

            // Informar o usuário que o objeto foi alterado
            alert(`O serviço vinculado ao material ${categoriaEscolhida} foi alterado com sucesso!`);
            window.location.reload();
        } else {
            alert(`O serviço vinculado ao material escolhido não foi encontrado.`);
        }
    }
}

// Abre modal de confirmação de exclusão
function abreConfirmacao(numero) {
    if (numero === 0) {
        const modal = document.getElementById("confirmacao0");
        const fundo = document.getElementById("fundo-modal");

        modal.classList.remove("hidden");
        fundo.classList.remove("hidden");
    } else if (numero === 1) {
        const modal = document.getElementById("confirmacao1");
        const fundo = document.getElementById("fundo-modal");

        modal.classList.remove("hidden");
        fundo.classList.remove("hidden");
    } else if (numero === 2) {
        const modal = document.getElementById("confirmacao2");
        const fundo = document.getElementById("fundo-modal");

        modal.classList.remove("hidden");
        fundo.classList.remove("hidden");
    } else if (numero === 3) {
        const modal = document.getElementById("confirmacao3");
        const fundo = document.getElementById("fundo-modal");

        modal.classList.remove("hidden");
        fundo.classList.remove("hidden");
    } else if (numero === 4) {
        const modal = document.getElementById("confirmacao4");
        const fundo = document.getElementById("fundo-modal");

        modal.classList.remove("hidden");
        fundo.classList.remove("hidden");
    } else if (numero === 5) {
        const modal = document.getElementById("confirmacao5");
        const fundo = document.getElementById("fundo-modal");

        modal.classList.remove("hidden");
        fundo.classList.remove("hidden");
    }

}


// Função que exclui o serviço selecionado
function excluirServico(id) {

    if (id === 0) {
        // Recuperar o array do localStorage e convertê-lo de volta para um array
        const servicosArrayExclusao = JSON.parse(localStorage.getItem('servicos'));

        // Verificar se o array existe
        if (servicosArrayExclusao) {

            // Encontrar o índice do item a ser excluído
            const index = 0;

            // Se o item existir no array, removê-lo
            if (index !== -1) {
                servicosArrayExclusao.splice(index, 1);

                // Armazenar o array atualizado de volta no localStorage
                localStorage.setItem('servicos', JSON.stringify(servicosArrayExclusao));

                // Informar o usuário que o item foi excluído
                alert(`O serviço foi excluído com sucesso!`);
                window.location.reload();
            } else {
                alert(`O serviço escolhido não pôde ser encontrado.`);
            }
        }
    } else if (id === 1) {
        const servicosArrayExclusao = JSON.parse(localStorage.getItem('servicos'));

        if (servicosArrayExclusao) {

            const index = 1;

            if (index !== -1) {
                servicosArrayExclusao.splice(index, 1);

                localStorage.setItem('servicos', JSON.stringify(servicosArrayExclusao));

                alert(`O serviço foi excluído com sucesso!`);
                window.location.reload();
            } else {
                alert(`O serviço escolhido não pôde ser encontrado.`);
            }
        }
    } else if (id === 2) {
        const servicosArrayExclusao = JSON.parse(localStorage.getItem('servicos'));

        if (servicosArrayExclusao) {

            const index = 2;

            if (index !== -1) {
                servicosArrayExclusao.splice(index, 1);

                localStorage.setItem('servicos', JSON.stringify(servicosArrayExclusao));

                alert(`O serviço foi excluído com sucesso!`);
                window.location.reload();
            } else {
                alert(`O serviço escolhido não pôde ser encontrado.`);
            }
        }
    } else if (id === 3) {
        const servicosArrayExclusao = JSON.parse(localStorage.getItem('servicos'));

        if (servicosArrayExclusao) {

            const index = 3;

            if (index !== -1) {
                servicosArrayExclusao.splice(index, 1);

                localStorage.setItem('servicos', JSON.stringify(servicosArrayExclusao));

                alert(`O serviço foi excluído com sucesso!`);
                window.location.reload();
            } else {
                alert(`O serviço escolhido não pôde ser encontrado.`);
            }
        }
    } else if (id === 4) {
        const servicosArrayExclusao = JSON.parse(localStorage.getItem('servicos'));

        if (servicosArrayExclusao) {

            const index = 4;

            if (index !== -1) {
                servicosArrayExclusao.splice(index, 1);

                localStorage.setItem('servicos', JSON.stringify(servicosArrayExclusao));

                alert(`O serviço foi excluído com sucesso!`);
                window.location.reload();
            } else {
                alert(`O serviço escolhido não pôde ser encontrado.`);
            }
        }
    } else if (id === 5) {
        const servicosArrayExclusao = JSON.parse(localStorage.getItem('servicos'));

        if (servicosArrayExclusao) {

            const index = 5;

            if (index !== -1) {
                servicosArrayExclusao.splice(index, 1);

                localStorage.setItem('servicos', JSON.stringify(servicosArrayExclusao));

                alert(`O serviço foi excluído com sucesso!`);
                window.location.reload();
            } else {
                alert(`O serviço escolhido não pôde ser encontrado.`);
            }
        }
    }
}
