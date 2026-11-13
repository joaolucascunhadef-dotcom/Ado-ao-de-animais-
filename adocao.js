    //.Login
    const botaoLogin = document.querySelector('.login');
    let perfilLogado = null; // Começa deslogado

    botaoLogin.addEventListener('click', () => {
        const escolha = prompt("Digite seu perfil de acesso:\n1 - Tutor\n2 - Funcionário ONG");
        
        if (escolha === "1") {
            perfilLogado = "tutor";
            alert("Logado como Tutor! Você pode favoritar e solicitar adoção.");
            // Esconde os botões de excluir para usuários não logados
            document.querySelectorAll('.botao_excluir').forEach(btn => btn.style.display = 'none');
        } else if (escolha === "2") {
            perfilLogado = "ong";
            alert("Logado como Funcionário da ONG! Você pode gerenciar e excluir animais.");
            // Mostra os botões de excluir
            document.querySelectorAll('.botao_excluir').forEach(btn => btn.style.display = 'flex');
        } else {
            alert("Opção inválida.");
        }
    });

    // Ao carregar, esconde a exclusão até que alguém da ONG faça login
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll('.botao_excluir').forEach(btn => btn.style.display = 'none');
    });


//Barra de pesquisa
const inputPesquisa = document.getElementById('pesquisa');
    const cardsAnimais = document.querySelectorAll('.aba_animal');

    inputPesquisa.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase();

        cardsAnimais.forEach(card => {
            const nome = card.querySelector('.nome_animal').textContent.toLowerCase();
            const raca = card.querySelector('.raca_animal').textContent.toLowerCase();

            if (nome.includes(termo) || raca.includes(termo)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });


    //Filtrar por raça, nome ou tipo
    const botoesFiltro = document.querySelectorAll('.tipos');

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            const categoria = botao.textContent.trim().toLowerCase();

            cardsAnimais.forEach(card => {
                const tipoCard = card.getAttribute('data-tipo'); // 'cao' ou 'gato'

                if (categoria === 'todos') {
                    card.style.display = 'flex';
                } else if (categoria === 'gatos' && tipoCard === 'gato') {
                    card.style.display = 'flex';
                } else if (categoria === 'cães' && tipoCard === 'cao') {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });


    // Excluir 
    document.querySelectorAll('.botao_excluir').forEach(botao => {
        botao.addEventListener('click', (e) => {
            if (confirm("Deseja realmente remover este animal?")) {
                e.target.closest('.aba_animal').remove();
            }
        });
    });

    // Solicitar Adoção
    document.querySelectorAll('.botao_solicitacao').forEach(botao => {
        botao.addEventListener('click', () => {
            alert("Solicitação de adoção enviada com sucesso! A ONG entrará em contato.");
        });
    });
