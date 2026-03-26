// Referências aos elementos HTML
const inputNome = document.querySelector('#nome');
const inputMsg = document.querySelector('#msg');
const btn = document.querySelector('#btnSubmit');

// Event Listener
btn.addEventListener('click', enviarMsg);

// Função para enviar mensagem
function enviarMsg(Event){
    Event.preventDefault();

    const nome = inputNome.value;
    const mensagem = inputMsg.value;

    const telefone = '5519997374798';

    if (nome.trim() === "" || mensagem.trim() === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
            
            if(nome.value.trim() === "") inputNome.style.borderColor = "red";
            if(mensagem.value.trim() === "") inputMsg.style.borderColor = "red";
            
            return;
        }
        
        inputNome.style.borderColor = "";
        inputMsg.style.borderColor = "";

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    
    window.open(url, '_blank');

    inputNome.value = '';
    inputMsg.value = '';

    inputNome.focus();    
}

const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    
    card.addEventListener('click', () => {
        
        const url = card.getAttribute('data-link');
        
        if (url) {
            window.open(url, '_blank'); 
        }
    });
});
const projectCards = document.querySelectorAll('.project-card[data-link]');

projectCards.forEach(card => {
    

    card.addEventListener('click', () => {
        const url = card.getAttribute('data-link');
        if (url) {
            window.open(url, '_blank'); // Abre o GitHub em uma nova aba
        }
    });
});