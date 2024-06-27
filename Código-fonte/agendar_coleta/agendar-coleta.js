$(document).ready(function () {
  // Show popup and cover when Agendar button is clicked
  $("#agendar-btn").click(function () {
    $(".popup").fadeIn(500);
    $(".cover").fadeTo(500, 0.9);
  });

  // Hide popup and cover when Editar button is clicked
  $(".btn-editar").click(function () {
    $(".popup").fadeOut(500);
    $(".cover").fadeOut(500);
  });

  // Add active class to Recolher button and remove from Entregar button
  $("#recolher-btn").click(function () {
    $(this).addClass("ativo");
    $("#entregar-btn").removeClass("ativo");
  });

  // Add active class to Entregar button and remove from Recolher button
  $("#entregar-btn").click(function () {
    $(this).addClass("ativo");
    $("#recolher-btn").removeClass("ativo");
  });

  // Salvar formulario no  LocalStorage e redirecionar para minhascoletas
  $(".btn-confirmar").click(function () {
    const coletaNumero = $(".numero-coleta .linha").text().split(":")[1].trim();
    const categoria = $("#nome").val();
    const produto = $("#produto").val();
    const data = $("#data").val();
    const horario = $("#horario").val();
    const coletor = $("#coletor").val();
    const entrega = $("#recolher-btn").hasClass("ativo")
      ? "Recolher"
      : "Entregar";
    const local = $("#local").val();

    const coletaData = {
      coletaNumero,
      categoria,
      produto,
      data,
      horario,
      coletor,
      entrega,
      local,
    };

    // Store coleta data in LocalStorage
    localStorage.setItem("coletaData", JSON.stringify(coletaData));

    // Redirect to "minhas coletas" page
    window.location.href =
      "../minhas_coletas_cliente/minhas-coletas.html";
  });

  // Optional: If you want to handle Cancel button click
  $("#cancelar-btn").click(function () {
    // Hide popup and cover if the cancel button is clicked
    $(".popup").fadeOut(500);
    $(".cover").fadeOut(500);
  });
});
