const pesquisa = document.getElementById('pesquisa');

pesquisa.addEventListener('input', (event) => {
  const value = formatString(event.target.value);
  const animais = document.querySelectorAll('.imagens_animais');

  animais.forEach((animal) => {
    // Pega o texto do elemento (ou o alt, caso sejam imagens) e formata
    const textoAnimal = formatString(animal.textContent || animal.alt || '');

    // Verifica se o texto do animal inclui o que foi digitado
    if (textoAnimal.includes(value)) {
      animal.style.display = 'block'; // Mostra o item
    } else {
      animal.style.display = 'none';  // Oculta o item
    }
  });
});

function formatString(value) {
  return value.toLowerCase().trim();
}
