const pesquisa = document.getElementById('pesquisa');

pesquisa.addEventListener('input', (event) => {
  const termosBusca = formatString(event.target.value);
  // Seleciona cada card de animal individual
  const animais = document.querySelectorAll('.aba_animal');

  animais.forEach((card) => {
    // Pega o conteúdo de texto inteiro do card (inclui nome "Bolinha" e raça "SRD")
    const textoCard = formatString(card.textContent);

    // Se o texto do card incluir o termo buscado, exibe; caso contrário, esconde
    if (textoCard.includes(termosBusca)) {
      card.style.display = 'flex'; // Mantém o layout flex do card
    } else {
      card.style.display = 'none'; // Esconde o card
    }
  });
});

function formatString(value) {
  return value.toLowerCase().trim();
}
