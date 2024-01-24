const text = document.querySelector(".container__text-area")
const img = document.querySelector(".mensagem-area__img")
const txt = document.querySelector(".mensagem-area__txt")
const cody = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];

const cardsDiv = document.getElementById('cards');

function btnEncript() {
    const textForEncript = encript(text.value);
    text.value = '';

}

function encript(stringCriptografy) {
    stringCriptografy = stringCriptografy.toLowerCase();

    for(let i = 0; i < cody.length; i++) {
        if(stringCriptografy.includes(cody[i][0])) {
            stringCriptografy = stringCriptografy.replaceAll(cody[i][0], cody[i][1]);
            img.style.display="none";
            txt.style.display="none";
        }
    }
    criarCard(stringCriptografy);

    return stringCriptografy;
}

function bntDesencript() {
    const stringCriptografada = text.value;

    if (stringCriptografada) {
        const resultadoDesencriptado = desencriptar(stringCriptografada, cody);
        text.value = resultadoDesencriptado;
        console.log(resultadoDesencriptado);
    } else {
        console.error('A string criptografada está indefinida.');
    }
}


function desencriptar(stringCriptografada, cody) {
    let desencriptada = stringCriptografada.toLowerCase();

    for (let i = 0; i < cody.length; i++) {
        if (desencriptada.includes(cody[i][1])) {
            desencriptada = desencriptada.replace(new RegExp(cody[i][1], 'g'), cody[i][0]);

        }
    }

    const cardsDiv = document.getElementById('cards');

    if (cardsDiv.getElementsByTagName('p').length === 0) {
        img.style.display = "none";
        txt.style.display = "none";
    }
    criarCard(desencriptada);


    return desencriptada;
}
function criarCard(texto) {
    const novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = texto;

    // Adiciona o resultado a um novo elemento <p>
    cardsDiv.appendChild(novoParagrafo);
    cardsDiv.appendChild(document.createElement('br'));
}

const botaoCopiar = document.getElementById('copy');
botaoCopiar.addEventListener('click', function() {
    copiarEremoverCards();
});

function copiarEremoverCards() {
    const cardsDiv = document.getElementById('cards');
    const textoCompleto = cardsDiv.textContent.trim(); // Obtém o texto dentro do campo cards

    if (textoCompleto) {
        copiarTextoParaClipboard(textoCompleto);
        cardsDiv.innerHTML = '';
        img.style.display = "";
        txt.style.display = ""; // Limpa o conteúdo do campo cards

    } 
}

function copiarTextoParaClipboard(texto) {
    const elementoTemporario = document.createElement('textarea');
    elementoTemporario.value = texto;

    document.body.appendChild(elementoTemporario);
    elementoTemporario.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporario);

    alert('Texto copiado para a área de transferência: ' + texto);
}
