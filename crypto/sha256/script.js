const hashContainer = document.querySelector('#hash-container');
const textArea = document.querySelector('#data');

textArea.addEventListener('input', (e) => {
    if (e.target.value !== '') {
        hash(e.target.value).then(hash => {
            hashContainer.innerHTML = hash;
        })
    } else {
        hashContainer.innerHTML = '';
    }
})

const hash = async (str) => {
    const encoder = new TextEncoder();
    const encodedString = encoder.encode(str);

    const hashBuffer = await crypto.subtle.digest('SHA-256', encodedString);

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
}