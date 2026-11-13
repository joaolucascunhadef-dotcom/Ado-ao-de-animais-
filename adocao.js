<script>
    // 1. Simulação de Login (Alterna entre Tutor e Funcionário da ONG)
    let tipoUsuario = 'tutor'; // Começa como tutor
    const botaoLogin = document.querySelector('.login');
    const botoesExcluir = document.querySelectorAll('.botao_excluir');

    // Esconde os botões de exclusão por padrão (visão do tutor)
    botoesExcluir.forEach(btn => btn.style.display = 'none');

    botaoLogin.addEventListener('click', () => {
        if (tipoUsuario === 'tutor') {
            tipoUsuario = 'ong';
            botaoLogin.textContent = 'Sair (ONG)';
            botoesExcluir.forEach(btn => btn.style.display = 'flex');
            alert('Modo Funcionário da ONG ativado! Agora você pode excluir animais.');
        } else {
            tipoUsuario = 'tutor';
            botaoLogin.textContent = 'Login';
            botoesExcluir.forEach(btn => btn.style.display = 'none');
            alert('Modo Tutor ativado.');
        }
    });

    // 2. Barra de Pesquisa (Nome ou Raça)
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

    // 3. Filtros por Botões (Todos, Gatos, Cães)
    const botoesTipos = document.querySelectorAll('.tipos');

    botoesTipos.forEach(botao => {
        botao.addEventListener('click', () => {
            const tipoFiltro = botao.textContent.trim().toLowerCase();

            cardsAnimais.forEach(card => {
                const altImg = card.querySelector('.foto_animal').alt.toLowerCase();
                const raca = card.querySelector('.raca_animal').textContent.toLowerCase();

                if (tipoFiltro === 'todos') {
                    card.style.display = 'flex';
                } else if (tipoFiltro === 'gatos' && (altImg.includes('gato') || raca.includes('siamês'))) {
                    card.style.display = 'flex';
                } else if (tipoFiltro === 'cães' && (altImg.includes('cachorro') || raca.includes('srd'))) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
</script>
