document.getElementById('encrypt-btn').addEventListener('click', () => {
    processText('encrypt');
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    processText('decrypt');
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const outputText = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    });
});

function processText(action) {
    const inputText = document.getElementById('input-text').value;
    const outputArea = document.getElementById('output-area');
    const outputTextElement = document.getElementById('output-text');

    let processedText = '';

    if (action === 'encrypt') {
        processedText = encryptText(inputText);
    } else if (action === 'decrypt') {
        processedText = decryptText(inputText);
    }

    if (processedText) {
        outputTextElement.textContent = processedText;
        document.getElementById('output-image').style.display = 'none';
        outputTextElement.style.display = 'block';
        document.getElementById('copy-btn').style.display = 'block';
    } else {
        outputTextElement.textContent = 'Ningún mensaje fue encontrado';
        document.getElementById('output-image').style.display = 'block';
        outputTextElement.style.display = 'none';
        document.getElementById('copy-btn').style.display = 'none';
    }
}

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}
