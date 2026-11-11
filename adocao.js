
const pesquisa = document.getElementById('pesquisa');
pesquisa.addEventListener('input' ,  (event) => {
  const value = event.target.value;

  console.log(formatstring (value));
});

function formatString(value){
return value.toLowerCase().trim()
}
