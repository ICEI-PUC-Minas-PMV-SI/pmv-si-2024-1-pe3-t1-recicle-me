$(document).ready(function () {
  // Recuperar dados do LocalStorage
  const coletaData = JSON.parse(localStorage.getItem("coletaData"));

  // Verificar se há dados armazenados
  if (coletaData) {
    // Criar o HTML dinamicamente
    const coletaHtml = `
            <div class="conteudo-coleta1">
                <div class="conteudo-caixa">
                    <p class="datas-conteudo">${coletaData.data}</p>
                    <p class="hora-conteudo">${coletaData.horario}</p>
                    <p class="empresa">${coletaData.coletor}</p>
                    <p class="local-coleta">${coletaData.entrega}</p>
                    <p class="produto">${coletaData.produto}</p>
                    <p class="numeracao">${coletaData.coletaNumero}</p>
                    <p class="validacao">Coleta agendada</p>
                    <p class="material">Metal</p>
                    <div class="imagem-coleta">
                    <img src="../imgs/metais (1).png" alt="vidro"
                    </div>
                </div>
            </div>
        `;

    // Inserir o HTML na página
    $(".conteudo-minhas-coletas").append(coletaHtml);
  }
});
