window.onload = function() {
    let saudacao = document.createElement('p');
    let horaAtual = new Date().getHours();

if(horaAtual < 12) {
    saudacao.innerText = 'Bom dia!'
} else if (horaAtual < 18) {
    saudacao.innerText = 'Boa tarde!'
} else {
    saudacao.innerText = 'Boa noite!'
}

document.querySelector('header').appendChild(saudacao);
};