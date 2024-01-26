const text = document.querySelector(".container__text-area")
const img = document.querySelector(".mensagem-area__img")
const txt = document.querySelector(".mensagem-area__txt")

const matiz = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];

const cardsDiv = document.getElementById('cards');
cardsDiv.addEventListener('input', function() {
    const completeText = cardsDiv.textContent.trim();
    botaoCopiar.style.display = completeText ? "block" : "none"; // Exibe o botão se houver conteúdo, senão oculta
});

function btnEncrypt() {
    encript(text.value);
    text.value = '';
}

function encript(stringCriptografy) {
    stringCriptografy = stringCriptografy.toLowerCase();

    for(let i = 0; i < matiz.length; i++) {
        if(stringCriptografy.includes(matiz[i][0])) {
            stringCriptografy = stringCriptografy.replaceAll(matiz[i][0], matiz[i][1]);
            img.style.display="none";
            txt.style.display="none";
        }
    }
    createCard(stringCriptografy);
    showBtnCopy();
    return stringCriptografy;
}

function bntDecrypt() {
    const stringEncrypted = text.value;

    if (stringEncrypted) {
        const resultDecrypted = decrypt(stringEncrypted, matiz);
        text.value = '';
        console.log(resultDecrypted);
    } else {
        console.error('A string criptografada está indefinida.');
    }
}


function decrypt(stringEncrypted, matiz) {
    let decrypted = stringEncrypted.toLowerCase();

    for (let i = 0; i < matiz.length; i++) {
        if (decrypted.includes(matiz[i][1])) {
            decrypted = decrypted.replace(new RegExp(matiz[i][1], 'g'), matiz[i][0]);

        }
    }

    const cardsDiv = document.getElementById('cards');

    if (cardsDiv.getElementsByTagName('p').length === 0) {
        img.style.display = "none";
        txt.style.display = "none";
    }

    createCard(decrypted);
    showBtnCopy();
    return decrypted;
}
function createCard(text) {
    const novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = text;

    cardsDiv.appendChild(novoParagrafo);
    cardsDiv.appendChild(document.createElement('br'));
}

const botaoCopiar = document.getElementById('copy');
botaoCopiar.addEventListener('click', function() {
    copyRemoveCards();
});

function copyRemoveCards() {
    const cardsDiv = document.getElementById('cards');
    const completeText = cardsDiv.textContent.trim();

    if (completeText) {
        copyTextToClipboard(completeText);
        cardsDiv.innerHTML = '';
        img.style.display = "";
        txt.style.display = "";
        hideButton()

    } 
}

function copyTextToClipboard(text) {
    const elementoTemporario = document.createElement('textarea');
    elementoTemporario.value = text;

    document.body.appendChild(elementoTemporario);
    elementoTemporario.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporario);

    alert(`texto copiado para a área de transferência: ${text}`);
}

function showBtnCopy() {
    botaoCopiar.style.display = "block";
    
}
function hideButton () {
    botaoCopiar.style.display = "none";
}
