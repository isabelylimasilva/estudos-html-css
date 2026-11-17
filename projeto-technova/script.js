// 1. Função para simular a compra de produtos
function adicionarAoCarrinho(nomeProduto){
    alert(`O produto "${nomeProduto}" foi adicionado ao seu carrinho com sucesso!`);
}

//2. Validação e envio do formulário de contato
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContato');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); //Impede o carregamento da página

        //Captura os valores digitados
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        //Validação simples
        if(nome.trim()==='' || email.trim()==='' || mensagem.trim()===''){
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Simulação de envio bem-sucedido
        alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre "${assunto}" foi enviada com sucesso.`);

        //Limpa o formulário após o envio
        form.reset();
    });
});
